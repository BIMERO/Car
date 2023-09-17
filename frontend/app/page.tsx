"use client";
import { About } from "@/Content/About";
import { Slide1 } from "@/Content/Slides/Slide1";
import { Slide2 } from "@/Content/Slides/Slide2";
import { Slide3 } from "@/Content/Slides/Slide3";
import { Blog } from "@/Content/Blog";
import { Brands } from "@/Content/Brands";
import Products from "@/Content/Products";
import { Search } from "@/Content/Search";
import { Why } from "@/Content/Why";
import Image from "next/image";
import { useEffect, useState } from "react";

const slider = [
  <Slide1 key="slide1" />,
  <Slide2 key="slide2" />,
  <Slide3 key="slide3" />,
];
export default function Home() {
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurr((prevslide) =>
        prevslide === slider.length - 1 ? 0 : prevslide + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between">
      <section>
        <div className="relative w-full h-[90vh]">
          {slider.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-64 transition-opacity ${
                index === curr ? "opacity-100" : "opacity-0"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>

        <About />
        <Products />
        <Search />
        <Brands />
        <Why />
        <Blog />
      </section>
    </main>
  );
}
