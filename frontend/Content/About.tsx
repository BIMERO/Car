import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="flex items-center flex-col md:flex-row bg-brand_primary-100">
      <div className="w-full h-full bg-brand_primary-100 text-brand_primary-50 p-4 lg:p-16 lg:w-1/2 relative">
        <h2 className="text-6xl mb-8 relative about">About Us</h2>
        <h3 className="text-2xl mb-4">CarShop</h3>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="border border-brand_primary-50 py-3 pl-2 pr-10 uppercase">
          Learn more
        </button>
      </div>
      <div className="bg-aboutbg w-full h-[510px] bg-center bg-cover bg-no-repeat clip lg:w-1/2"></div>
    </section>
  );
};
