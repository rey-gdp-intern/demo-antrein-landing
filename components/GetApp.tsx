import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const GetApp = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Register your projects now!
          </h2>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row items-center">
            <div className="w-full">
              <Link href={`https://dashboard.${baseUrl}/register`}>
                <Button
                  type="button"
                  title="Register"
                  icon="/register.svg"
                  variant="btn_white"
                  full
                />
              </Link>
            </div>
            <div className="w-full">
              <Link href={`https://dashboard.${baseUrl}/login`}>
                <Button
                  type="button"
                  title="Login"
                  icon="/login.svg"
                  variant="btn_dark_green_outline"
                  full
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
