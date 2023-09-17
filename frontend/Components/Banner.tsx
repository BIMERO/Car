import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface BannerProps {
  title: string;
  page: string;
}
const Banner: React.FC<BannerProps> = ({ title, page }) => {
  return (
    <section className="bg-banner h-[60vh] bg-cover bg-center relative">
      <div className="absolute bg-brand_neutral-150 h-full w-full opacity-90"></div>
      <header className="relative flex flex-col items-center justify-end h-full z-10 text-brand_primary-50 pb-20">
        <h1 className="text-4xl mb-5"> {title} </h1>
        <p className="flex items-center gap-2 text-xl">
          Home <MdKeyboardDoubleArrowRight /> <span> {page} </span>
        </p>
      </header>
    </section>
  );
};

export default Banner;
