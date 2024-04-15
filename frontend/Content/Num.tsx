"use client";
import React from "react";
import { GiCarKey } from "react-icons/gi";
import { FaCar, FaTools, FaPlus } from "react-icons/fa";
import { BsPersonFillCheck } from "react-icons/bs";
import CountUp from "react-countup";

export const Num = () => {
  return (
    <section className="py-12 px-4 bg-brand_neutral-100">
      <div className="contain">
        <ul className="flex items-center justify-between flex-col lg:flex-row">
          <li className="text-center mb-4">
            <FaCar className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl mb-6" />
            <h2 className="text-4xl font-medium mb-4">
              <CountUp start={0} end={500} duration={5} delay={3} />
            </h2>
            <p className="capitalize flex items-center text-lg gap-2">
              <FaPlus />
              Available cars
            </p>
          </li>
          <li className="text-center mb-4">
            <GiCarKey className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl mb-6" />
            <h2 className="text-4xl font-medium mb-4">
              <CountUp start={0} end={1000} duration={5} delay={3} />
            </h2>
            <p className="capitalize flex items-center text-lg gap-2">
              <FaPlus />
              happy clients
            </p>
          </li>
          <li className="text-center mb-4">
            <FaTools className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl mb-6" />
            <h2 className="text-4xl font-medium mb-4">
              <CountUp start={0} end={1500} duration={5} delay={3} />
            </h2>
            <p className="capitalize flex items-center text-lg gap-2">
              <FaPlus />
              team workers
            </p>
          </li>
          <li className="text-center mb-4">
            <BsPersonFillCheck className="border-4 border-brand_primary-100 rounded-full p-4 m-auto text-8xl mb-6" />
            <h2 className="text-4xl font-medium mb-4">
              <CountUp start={0} end={20} duration={5} delay={3} />
            </h2>
            <p className="capitalize flex items-center gap-2">
              <FaPlus /> years of experience
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
