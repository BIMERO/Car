import React from "react";
import { GiCarKey } from "react-icons/gi";
import { FaCar, FaTools, FaPlus } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";

export const Num = () => {
  return (
    <section className="py-12 px-4 bg-brand_neutral-100">
      <div className="contain">
        <ul className="flex items-center justify-between flex-col lg:flex-row">
          <li className="text-center">
            <FaCar className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl" />
            <h2 className="text-4xl font-medium">500</h2>
            <p className="capitalize flex items-center text-lg gap-2">
              <FaPlus />
              Available cars
            </p>
          </li>
          <li className="text-center">
            <GiCarKey className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl" />
            <h2 className="text-4xl font-medium">1000</h2>
            <p className="capitalize flex items-center text-lg gap-2">
              <FaPlus />
              happy clients
            </p>
          </li>
          <li className="text-center">
            <FaTools className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl" />
            <h2 className="text-4xl font-medium">1500</h2>
            <p className="capitalize flex items-center text-lg gap-2">
              <FaPlus />
              team workers
            </p>
          </li>
          <li className="text-center">
            <BsPersonFillCheck className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl" />
            <h2 className="text-4xl font-medium">20</h2>
            <p className="capitalize flex items-center gap-2">
              <FaPlus /> years of experience
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
