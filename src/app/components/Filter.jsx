"use client";
import CustomDropdown from "./CustomDropdown";

export default function Filter({
  filters,
  setFilters,
  handleSubmit,
  clearFilters,
  isFilterOpen,
  toggleFilter,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Updated submit handler to close slide-over
  const handleSubmitAndClose = (e) => {
    e.preventDefault();
    handleSubmit(e); // Apply filters logic
    toggleFilter(); // Close the slide-over
  };

  return (
    <>
      {/* Slide-Over for Filters (Mobile View) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ${
          isFilterOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-300">
          <h2 className="text-lg font-bold">Filters</h2>
          <button
            onClick={toggleFilter}
            className="text-gray-500 hover:text-gray-800"
          >
            Close
          </button>
        </div>
        <form
          onSubmit={handleSubmitAndClose}
          className="flex flex-col gap-4 px-5 py-10 text-sm"
        >
          {/* CustomDropdown for Available */}
          <CustomDropdown
            label="Available"
            value={filters.available}
            onChange={(value) => setFilters((prev) => ({ ...prev, available: value }))}
            options={[
              { value: "", label: "Any" },
              { value: "true", label: "Yes" },
              { value: "false", label: "No" },
            ]}
          />

          {/* CustomDropdown for Type */}
          <CustomDropdown
            label="Type"
            value={filters.type}
            onChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}
            options={[
              { value: "", label: "Any" },
              { value: "residential", label: "Residential" },
              { value: "commercial", label: "Commercial" },
            ]}
          />

          {/* CustomDropdown for Managed By */}
          <CustomDropdown
            label="Managed By"
            value={filters.manager}
            onChange={(value) => setFilters((prev) => ({ ...prev, manager: value }))}
            options={[
              { value: "", label: "Any" },
              { value: "clutch", label: "Clutch" },
              { value: "neighborly", label: "Neighborly" },
            ]}
          />

          {/* Additional Filters */}
          <label>
            Min Price:
            <input
              type="number"
              step={100}
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              step={100}
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label>
            Min ft²:
            <input
              type="number"
              step={100}
              name="minSqFootage"
              value={filters.minSqFootage}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label>
            Max ft²:
            <input
              type="number"
              step={100}
              name="maxSqFootage"
              value={filters.maxSqFootage}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label>
            Bedrooms:
            <input
              type="number"
              name="bedrooms"
              value={filters.bedrooms}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              min={0}
              max={5}
            />
          </label>
          <label>
            Bathrooms:
            <input
              type="number"
              name="bathrooms"
              value={filters.bathrooms}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              min={0}
              max={5}
            />
          </label>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="mt-4 bg-primaryBlue text-primaryLight px-6 py-2 rounded-full"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-2 bg-gray-200 text-gray-800 px-6 py-2 rounded-full"
            >
              Clear Filters
            </button>
          </div>
        </form>
      </div>

      {/* Filters for Larger Screens */}
      <form
        onSubmit={handleSubmit}
        className="hidden lg:flex flex-wrap gap-5 px-5 py-10 border-b border-secondaryBlue text-sm"
      >
         <CustomDropdown
          label="Available"
          value={filters.available}
          onChange={(value) => setFilters((prev) => ({ ...prev, available: value }))}
          options={[
            { value: "", label: "Any" },
            { value: "true", label: "Yes" },
            { value: "false", label: "No" },
          ]}
        />
        <CustomDropdown
          label="Type"
          value={filters.type}
          onChange={(value) => setFilters((prev) => ({ ...prev, type: value }))}
          options={[
            { value: "", label: "Any" },
            { value: "residential", label: "Residential" },
            { value: "commercial", label: "Commercial" },
          ]}
        />
        <CustomDropdown
          label="Managed By"
          value={filters.manager}
          onChange={(value) => setFilters((prev) => ({ ...prev, manager: value }))}
          options={[
            { value: "", label: "Any" },
            { value: "clutch", label: "Clutch" },
            { value: "neighborly", label: "Neighborly" },
          ]}
        />
        
        {/* Additional Filters */}
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
            className="flex items-center bg-gray-200 text-gray-800 hover:brightness-110 transition duration-200 px-6 py-2 rounded-full font-medium text-base"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </>
  );
}