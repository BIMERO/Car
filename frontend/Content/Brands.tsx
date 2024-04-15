"use client";
import React, { useState } from "react";
import brands from "@/Data/brands.json";
import Image from "next/image";
export const Brands = () => {
  const [expandedCard, setExpandedCard] = React.useState<number>(1);

  const handleCardClick = (id: number) => setExpandedCard(id);

  return (
    <section className="py-12 px-4 bg-brand_neutral-100">
      <div className="contain">
        <h2 className="capitalize text-6xl mb-8 relative prod">
          popular brands
        </h2>
        <p className="capitalize text-2xl mb-4">Our top quality brands</p>
        <div className="flex flex-col md:flex-row">
          {brands.map((item) => {
            return (
              <div
                key={item.id}
                className={`panel ${expandedCard === item.id ? "active" : ""}`}
                onClick={() => handleCardClick(item.id)}
                style={{ backgroundImage: `url(${item.cover})` }}
              >
                <h3 className="uppercase text-brand_primary-200 font-medium absolute bottom-0">
                  {item.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
