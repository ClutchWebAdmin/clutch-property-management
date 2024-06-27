export default function ServicesCard({ service, variant }) {
  if (variant === "grid") {
    return (
      <div
        id={service.sectionId}
        className="flex flex-col h-full w-full lg:aspect-square bg-primaryMid text-primaryDark rounded-lg"
      >
        <div className="flex flex-col justify-between border-b border-primaryLight m-5">
          <div className="text-4xl mb-10 p-2 rounded-lg border border-primaryLight w-fit h-auto">
            {service.icon}
          </div>
          <p className="pb-5 font-medium text-2xl xl:text-3xl">
            {service.name}
          </p>
        </div>
        <p className="px-5 pt-10 pb-10 lg:py-10">{service.description}</p>
      </div>
    );
  } else if (variant === "list") {
    return (
      <div
        id={service.sectionId}
        className="flex flex-col lg:flex-row h-full w-full border-b border-secondaryBlue bg-primaryBlue text-primaryLight"
      >
        <div className="flex flex-col lg:flex-row w-full" data-aos="fade-up">
          <div className="flex w-1/2 lg:w-2/12 p-5">
            <div className="text-4xl font-medium w-fit h-fit">
              {service.icon}
            </div>
          </div>
          <p className="flex flex-row gap-2 items-center p-5 w-full lg:w-5/12 h-fit font-medium text-3xl">
            {service.name}
          </p>
          <p className="p-5 w-full lg:w-5/12 h-fit mb-20 text-lg lg:text-xl">
            {service.description}
          </p>
        </div>
      </div>
    );
  }
}
