import React from "react";
import Image from "next/image";
import teams from "@/Data/teams.json";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Team = () => {
  return (
    <section className="py-12 px-4 bg-brand_primary-100 text-brand_primary-50">
      <div className="contain">
        <header>
          <h2 className="text-6xl mb-8 relative about">Our Team</h2>
          <p className="text-2xl mb-4">Meet Our Team</p>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {teams.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-brand_primary-50 p-5 rounded-lg text-brand_neutral-150 text-center"
              >
                <div className="relative overflow-hidden cursor-pointer img">
                  <Image
                    src={item.cover}
                    alt="profile"
                    width={100}
                    height={100}
                    className="rounded-lg w-full mb-3"
                  />
                  <article className="absolute top-3 right-0 -mr-10 transition-all icon">
                    <FaFacebookF className="bg-brand_primary-100 text-brand_primary-50 rounded-full p-2 text-4xl m-auto mb-6" />
                    <FaTwitter className="bg-brand_primary-100 text-brand_primary-50 rounded-full p-2 text-4xl m-auto mb-6" />
                    <FaLinkedin className="bg-brand_primary-100 text-brand_primary-50 rounded-full p-2 text-4xl m-auto mb-6" />
                  </article>
                </div>
                <h3 className="text-3xl font-medium mb-2">{item.name}</h3>
                <p className="text-brand_primary-100 text-xl font-medium">
                  {item.position}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
