import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function CustomDropdown({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative">
      {/* Label */}
      <label className="block  font-medium text-gray-700">{label}:</label>

      {/* Dropdown Trigger */}
      <div
        className="flex items-center justify-between w-full p-2 border  rounded-sm text-gray-700 bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
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

