export default function ServicesCard({ service }) {
  return (
    <div
      id={service.sectionId}
      className="flex flex-col h-full w-full lg:aspect-square bg-secondaryBlue text-primaryLight rounded-lg"
    >
      <div className="flex flex-col justify-between border-b border-accentBlue m-5">
        <div className="text-4xl inline-block border border-accentBlue rounded w-fit p-2 mb-10">
          {service.icon}
        </div>
        <p className="pb-5 font-medium text-2xl xl:text-3xl">{service.name}</p>
      </div>
      <p className="px-5 pt-10 pb-10 lg:py-10">{service.description}</p>
    </div>
  );
}
