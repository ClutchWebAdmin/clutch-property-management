"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PropertyCard from "./PropertyCard";
import { FaSearch, FaFilter } from "react-icons/fa";
import Filter from "./Filter";

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
    manager: "",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const { itemsPerPage } = breakpoints.find(
        (breakpoint) => width >= breakpoint.width
      );
      setItemsPerPage(itemsPerPage);
    };

    handleResize();
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
      if (property.available === false) return false;

      const matchesSearchQuery = property.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const available = query.available
        ? property.available?.toString() === query.available
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
      const manager = query.manager ? property.manager === query.manager : true;

      return (
        matchesSearchQuery &&
        available &&
        minPrice &&
        maxPrice &&
        minSqFootage &&
        maxSqFootage &&
        bedrooms &&
        bathrooms &&
        type &&
        manager
      );
    });

    const sorted = filtered.sort((a, b) => {
      if (a.manager === "clutch" && b.manager !== "clutch") return -1;
      if (a.manager !== "clutch" && b.manager === "clutch") return 1;
      return 0;
    });

    setFilteredProperties(sorted);
  }, [searchParams, properties, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
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
    setCurrentPage(1);
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
      manager: "",
    });
    setSearchQuery("");
    router.push(`/properties`, { scroll: false });
    setCurrentPage(1);
    setIsFilterOpen(false);
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
      <section className="bg-primaryLight text-primaryDark">
        <div className="px-5 py-5">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by property name"
              className="w-full lg:w-1/4 px-4 py-2 pl-12 rounded-full border border-primaryBlue text-sm"
            />
            <FaSearch className="absolute left-4 text-gray-400" size={20} />
          </div>
        </div>
        <div className="px-5 pb-5 lg:hidden">
          <button
            onClick={toggleFilter}
            className="flex items-center bg-primaryBlue text-primaryLight px-6 py-2 rounded-full font-medium"
          >
            <FaFilter className="mr-2" />
            Filters
          </button>
        </div>
        <Filter
          filters={filters}
          setFilters={setFilters}
          handleSubmit={handleSubmit}
          clearFilters={clearFilters}
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
        />
        <div className="w-full px-5 py-10 border-b border-secondaryBlue">
          {filteredProperties.length > 0 ? (
            <>
              {/* Results Count */}
              <div className="mb-10">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-primaryDark">
                  {filteredProperties.length} results found.
                </p>
              </div>

              {/* Grid Layout for Properties */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 w-full">
                {displayedProperties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>

              {/* Pagination Controls */}
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

                <span className="font-medium text-lg text-primaryDark">
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
                <div className="col-span-full text-center">
                  <p className="text-3xl xl:text-4xl font-medium text-primaryDark">
                    No results found.
                  </p>
                </div>
                )}
        </div>

      </section>
    </Suspense>
  );
}
