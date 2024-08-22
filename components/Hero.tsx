import React from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section
      className="max-container padding-container flex flex-col
     py-10 pb-32 lg:py-20 xl:flex-row"
    >
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">
          Control your online traffic with a virtual waiting room
        </h1>

        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be a part of each of your endeavors in managing online
          traffic seamlessly. With the antrein application, we can help you
          optimize your online operations and ensure customer satisfaction, all
          within a single app
        </p>

        <div className="my-11 flex w-full gap-3 sm:flex-row">
          <Link href={`https://dashboard.${baseUrl}/register`}>
            <Button type="button" title="Register Now" variant="btn_orange" />
          </Link>
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
