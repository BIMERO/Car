import React from "react";
import blogs from "@/Data/blogs.json";
import { FcCalendar } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

export const Blog = () => {
  return (
    <section className="px-5 py-20 bg-brand_neutral-100">
      <div className="contain">
        <h2 className="text-6xl mb-8 relative prod">Our Blog</h2>
        <p className="text-2xl mb-4">Latest News & Blog</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((item) => {
            return (
              <div
                key={item.id}
                className="p-4 bg-brand_primary-50 rounded-xl drop-shadow-sm"
              >
                <Image
                  src={item.cover}
                  alt="blog"
                  width={100}
                  height={100}
                  className="w-full rounded-lg mb-4"
                />
                <div className="flex items-center gap-5 mb-2">
                  <p className="flex items-center gap-2">
                    <CgProfile /> {item.author}
                  </p>
                  <p className="flex items-center gap-2">
                    <FcCalendar /> {item.date}
                  </p>
                </div>
                <hr />
                <p className="mb-6 mt-3 text-2xl"> {item.details} </p>
                <button className="flex items-center gap-2 justify-center bg-brand_primary-100 text-brand_primary-50 rounded-lg p-3 outline-none">
                  Read More <FaArrowRightLong />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
