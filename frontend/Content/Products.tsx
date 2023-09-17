import React from "react";
import Image from "next/image";
import product from "@/Data/products.json";
import { RiSteeringFill } from "react-icons/ri";
import { FaCarAlt } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { SlSpeedometer } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa";

const Products = () => {
  return (
    <section className="px-5 py-20 bg-brand_neutral-100">
      <div className="contain">
        <header>
          <h2 className="text-6xl mb-8 relative prod">New Arrivals</h2>
          <p className="text-2xl mb-4">Explore our products</p>
        </header>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {product.map((item) => {
            return (
              <div
                key={item.id}
                className="p-3 bg-brand_primary-50 rounded-xl drop-shadow-sm"
              >
                <Image
                  src={item.prod}
                  alt="product"
                  width={100}
                  height={100}
                  className="w-full h-32 rounded-lg mb-3"
                />
                <h4 className="text-2xl mb-3"> {item.name} </h4>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <p className="flex items-center gap-2">
                    <RiSteeringFill className="text-brand_primary-100" />
                    {item.type}
                  </p>
                  <p className="flex items-center gap-2">
                    <BsFillFuelPumpFill className="text-brand_primary-100" />
                    {item.fuel}
                  </p>
                  <p className="flex items-center gap-2">
                    <FaCarAlt className="text-brand_primary-100" /> Model:
                    {item.year}
                  </p>
                  <p className="flex items-center gap-2">
                    <SlSpeedometer className="text-brand_primary-100" />
                    {item.engine}
                  </p>
                </div>
                <hr className="mb-3" />
                <p className="flex items-center text-brand_primary-100 text-lg font-bold">
                  <FaDollarSign /> {item.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
