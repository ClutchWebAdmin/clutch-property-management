"use client";

import { useEffect } from "react";
import TheHeader from "./components/TheHeader";
import LinkButton from "./components/UI/LinkButton";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <TheHeader variant="dark" />
      <main>
        <section className="flex flex-col gap-5 pt-[var(--header-height)] border-b border-secondaryBlue h-[400px] p-5 mt-5 justify-center items-center">
          <h3 className="text-3xl md:text-4xl font-medium">
            404 Page Not Found
          </h3>
          <div className="flex flex-col gap-5 justify-center items-center">
            <p>The requested page cannot be found.</p>
            <LinkButton variant={`secondary`} linkTo={`/`} text={`Go home`} />
          </div>
        </section>
      </main>
    </>
  );
}
