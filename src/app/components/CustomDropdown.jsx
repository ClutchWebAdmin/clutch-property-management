import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CustomDropdown({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false); // Close the dropdown after selection
  };

   // Close dropdown if clicked outside
   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="relative" ref={dropdownRef} >
      {/* Label */}
      <label className="block lg:hidden font-medium text-gray-700">{label}:</label>

      {/* Dropdown Trigger */}
      <div
        className="flex items-center justify-between w-full p-2 lg:px-4 lg:py-3 lg:rounded-full border lg:border-primaryBlue rounded-sm text-gray-700 cursor-pointer lg:w-fit lg:h-fit lg:gap-1"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <label className="lg:block hidden font-medium text-gray-700">{label}:</label>

        <span>{options.find((opt) => opt.value === value)?.label || "Select an option"}</span>
        <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
          {options.map((option) => (
            <li
              key={option.value}
              className="p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

