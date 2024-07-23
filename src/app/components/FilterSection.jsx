"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";

const breakpoints = [
  { width: 1536, itemsPerPage: 12 }, // 2xl
  { width: 1280, itemsPerPage: 9 }, // xl
  { width: 1024, itemsPerPage: 9 }, // lg
  { width: 768, itemsPerPage: 6 }, // md
  { width: 640, itemsPerPage: 4 }, // sm
  { width: 0, itemsPerPage: 4 }, // xs and default
];

export default function FilterSection({ properties }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [filters, setFilters] = useState({
    available: "",
    minPrice: "",
    maxPrice: "",
    minSqFootage: "",
    maxSqFootage: "",
    bedrooms: "",
    bathrooms: "",
    type: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4); // default value

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const { itemsPerPage } = breakpoints.find(
        (breakpoint) => width >= breakpoint.width
      );
      setItemsPerPage(itemsPerPage);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());

    setFilters((prevFilters) => ({
      ...prevFilters,
      ...query,
    }));

    const filtered = properties.filter((property) => {
      const available = query.available
        ? property.available != null &&
          property.available?.toString() === query.available
        : true;
      const minPrice = query.minPrice
        ? parseFloat(query.minPrice) <= property.price
        : true;
      const maxPrice = query.maxPrice
        ? parseFloat(query.maxPrice) >= property.price
        : true;
      const minSqFootage = query.minSqFootage
        ? parseFloat(query.minSqFootage) <= property.sqFootage
        : true;
      const maxSqFootage = query.maxSqFootage
        ? parseFloat(query.maxSqFootage) >= property.sqFootage
        : true;
      const bedrooms = query.bedrooms
        ? parseInt(query.bedrooms, 10) <= property.bedrooms
        : true;
      const bathrooms = query.bathrooms
        ? parseInt(query.bathrooms, 10) <= property.bathrooms
        : true;
      const type = query.type ? property.type === query.type : true;

      return (
        available &&
        minPrice &&
        maxPrice &&
        minSqFootage &&
        maxSqFootage &&
        bedrooms &&
        bathrooms &&
        type
      );
    });

    setFilteredProperties(filtered);
  }, [searchParams, properties]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = new URLSearchParams();

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        query.set(key, filters[key]);
      }
    });

    router.push(`/properties?${query.toString()}`, { scroll: false });
    setCurrentPage(1); // Reset to first page on new filter submission
  };

  const clearFilters = () => {
    setFilters({
      available: "",
      minPrice: "",
      maxPrice: "",
      minSqFootage: "",
      maxSqFootage: "",
      bedrooms: "",
      bathrooms: "",
      type: "",
    });
    router.push(`/properties`, { scroll: false });
    setCurrentPage(1); // Reset to first page on clear filters
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(filteredProperties.length / itemsPerPage)
      )
    );
  };

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const displayedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Suspense>
      <section
        id="search-properties"
        className="bg-primaryLight text-primaryDark"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-5 px-5 py-10 border-b border-secondaryBlue text-sm"
        >
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Available:
            <select
              name="available"
              value={filters.available}
              onChange={handleChange}
              className="bg-transparent w-fit p-1 font-medium"
            >
              <option value="">Any</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Type:
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="bg-transparent w-fit p-1 font-medium"
            >
              <option value="">Any</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </label>
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Min Price:
            <input
              type="number"
              step={100}
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              className="bg-transparent w-[100px] p-1 font-medium"
              min={0}
            />
          </label>
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Max Price:
            <input
              type="number"
              step={100}
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max Price"
              className="bg-transparent w-[100px] p-1 font-medium"
              min={0}
            />
          </label>
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Min ft²:
            <input
              type="number"
              step={100}
              name="minSqFootage"
              value={filters.minSqFootage}
              onChange={handleChange}
              placeholder="Min ft²"
              className="bg-transparent w-[100px] p-1 font-medium"
              min={0}
            />
          </label>
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Max ft²:
            <input
              type="number"
              step={100}
              name="maxSqFootage"
              value={filters.maxSqFootage}
              onChange={handleChange}
              placeholder="Max ft²"
              className="bg-transparent w-[100px] p-1 font-medium"
              min={0}
            />
          </label>
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Bedrooms:
            <input
              type="number"
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleChange}
              placeholder="Bedrooms"
              className="bg-transparent flex w-[100px] p-1 font-medium"
              min={0}
              max={5}
            />
          </label>
          <label className="flex items-center border border-primaryBlue px-4 py-2 rounded-full w-fit h-fit gap-1">
            Bathrooms:
            <input
              type="number"
              name="bathrooms"
              value={filters.bathrooms}
              onChange={handleChange}
              placeholder="Bathrooms"
              className="bg-transparent w-[100px] p-1 font-medium"
              min={0}
              max={5}
            />
          </label>
          <div className="grid grid-cols-2 gap-5">
            <button
              type="submit"
              className="flex items-center bg-primaryBlue text-primaryLight hover:brightness-110 transition duration-200 px-6 py-2 rounded-full font-medium text-base"
            >
              Apply Filters
            </button>
            <button
              type="button"
              className="flex items-center bg-accentBlue text-primaryLight hover:brightness-110 transition duration-200 px-6 py-2 rounded-full font-medium text-base"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </form>

        <div
          id="results"
          className="w-full px-5 py-10 border-b border-secondaryBlue"
        >
          {filteredProperties.length > 0 ? (
            <>
              <div className="mb-10">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
                  {filteredProperties.length} results.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
                {displayedProperties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>

              <div className="flex flex-row justify-between md:justify-center items-center gap-5 mt-10">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-8 py-2 w-fit h-fit text-lg font-medium rounded-full transition-colors duration-200 border border-primaryBlue bg-primaryBlue text-primaryLight hover:bg-secondaryBlue hover:border-secondaryBlue ${
                    currentPage === 1 ? "invisible" : ""
                  }`}
                >
                  Prev
                </button>

                <span className="font-medium">
                  {currentPage} of {totalPages}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-8 py-2 w-fit h-fit text-lg font-medium rounded-full transition-colors duration-200 border border-primaryBlue bg-primaryBlue text-primaryLight hover:bg-secondaryBlue hover:border-secondaryBlue ${
                    currentPage === totalPages ? "invisible" : ""
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="col-span-full">
              <p className="text-3xl xl:text-4xl">No results.</p>
            </div>
          )}
        </div>
      </section>
    </Suspense>
  );
}
