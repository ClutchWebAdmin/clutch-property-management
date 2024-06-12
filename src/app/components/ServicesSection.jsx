import ServicesCard from "./ServicesCard";
import services from "./data/services";

export default function ServicesSection({ id }) {
  return (
    <section id={id}>
      <div className="flex flex-col z-10 w-full h-full bg-primaryLight text-primaryDark border-b border-secondaryBlue">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 h-full p-5">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
