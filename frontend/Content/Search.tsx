import BrandButton from "@/Components/BrandButton";
import BrandInput from "@/Components/BrandInput";
import React from "react";

export const Search = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-brand_primary-50">
      <div className="bg-searchbg w-full md:w-1/2 h-[570px] bg-center bg-cover bg-no-repeat clip1"></div>
      <div className="w-full px-4 md:w-1/2 lg:px-12">
        <header className="mt-7">
          <h2 className="text-6xl mb-8 relative prod">Search</h2>
          <p className="text-2xl mb-4">Let&apos;s find our prefect car</p>
        </header>
        <form action="submit" className="flex flex-col pb-12">
          <BrandInput
            type="text"
            name="manufacturer"
            id="manufacturer"
            title="manufacturer"
            placeholder="manufacturer"
            className="mb-4"
          />
          <BrandInput
            title="model"
            type="text"
            name="model"
            id="model"
            placeholder="model"
            className="mb-4"
          />
          <BrandInput
            title="year"
            type="number"
            name="year"
            id="year"
            placeholder="year"
            className="mb-4"
          />
          <BrandInput
            title="price"
            type="number"
            name="price"
            id="price"
            placeholder="price"
            className="mb-4"
          />
          <BrandInput
            title="price"
            type="number"
            name="price"
            id="price"
            placeholder="car type"
            className="mb-4"
          />
          <BrandButton title="SUBMIT" />
        </form>
      </div>
    </section>
  );
};
