"use client";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import testimonial from "@/Data/testimonials.json";

const Testimonies = () => {
  const [activeIndex, setactiveIndex] = useState(0);

  const curentIndex = useRef(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= testimonial.length) {
      newIndex = testimonial.length - 1;
    }
    curentIndex.current = newIndex;
    setactiveIndex(newIndex);
  };
  const slideRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const activeSlide = slideRef.current?.children[activeIndex];
    slideRef.current?.scrollTo({
      left: (activeSlide?.scrollWidth ?? 0) * activeIndex,
    });
  }, [activeIndex]);

  useEffect(() => {
    const interval = setTimeout(() => {
      console.log("reach");
      if (activeIndex >= testimonial.length - 1) {
        updateIndex(0);
      } else {
        updateIndex(curentIndex.current + 1);
      }
    }, 1000);
  }, [activeIndex]);

  return (
    <section className="py-12 px-4 contain slider">
      <header>
        <h2 className="text-6xl mb-8 relative prod">New Arrivals</h2>
        <p className="text-2xl mb-4">Explore our products</p>
      </header>
      <div
        className="flex gap-4 slide_content"
        ref={slideRef as LegacyRef<HTMLDivElement>}
      >
        {testimonial.map((item) => {
          return (
            <div
              key={item.id}
              id={item.id.toString()}
              className="bg-brand_neutral-100 p-6 relative rounded-lg w-96 slide"
            >
              <Image
                src={item.profile}
                alt="profile"
                width={100}
                height={100}
                className="rounded-full w-24 h-24 z-10 relative mb-3"
              />
              <FaQuoteRight className="text-brand_neutral-200 absolute top-14 right-16 text-[80px]" />
              <header className="mb-4 capitalize">
                <p className="mb-2 text-2xl font-medium"> {item.name} </p>
                <p className="text-lg"> {item.position} </p>
              </header>
              <p className="mb-5"> {item.comment} </p>
              <ul className="flex items-center gap-1">
                <li>
                  <FaStar className="text-brand_primary-100" />
                </li>
                <li>
                  <FaStar className="text-brand_primary-100" />
                </li>
                <li>
                  <FaStar className="text-brand_primary-100" />
                </li>
                <li>
                  <FaStar className="text-brand_primary-100" />
                </li>
                <li>
                  <FaStar className="text-brand_primary-100" />
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonies;
