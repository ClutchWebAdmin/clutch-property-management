import {
  IoShieldCheckmarkOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { BsBuildingExclamation } from "react-icons/bs";
import { PiHandshake, PiCurrencyDollar } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const services = [
  {
    name: "Tenant Placement & Screening",
    sectionId: "tenant-screening",
    icon: <IoShieldCheckmarkOutline />,
    description:
      "We find suitable tenants for vacant properties and screen applicants through background checks, credit checks, and rental history verification.",
  },
  {
    name: "Tenant Relations",
    sectionId: "tenant-relations",
    icon: <PiHandshake />,
    description:
      "We serve as the primary point of contact for tenants, addressing their concerns, handling complaints, and facilitating communication between tenants and property owners.",
  },
  {
    name: "Lease Enforcement",
    sectionId: "lease-enforcement",
    icon: <IoDocumentTextOutline />,
    description:
      "We enforce lease agreements, including addressing lease violations, handling evictions if necessary, and ensuring compliance with local regulations",
  },
  {
    name: "Property Inspections",
    sectionId: "property-inspections",
    icon: <BsBuildingExclamation />,
    description:
      "We proactively conduct regular inspections of the property to ensure it is well-maintained and address any issues promptly.",
  },
  {
    name: "Maintenance & Repairs",
    sectionId: "maintenance-and-repairs",
    icon: <HiOutlineWrenchScrewdriver />,
    description:
      "We coordinate and oversee maintenance tasks and repairs on the property, including emergency repairs, regular upkeep, and renovations.",
  },
  {
    name: "Rent Collection",
    sectionId: "rent-collection",
    icon: <PiCurrencyDollar />,
    description:
      "We handle the collection of rent from tenants, payment plans, following up on late payments, and enforcing lease agreements",
  },
];

export default services;
