import React from "react";
import Banner from "@/Components/Banner";
import { About } from "@/Content/About";
import { Num } from "@/Content/Num";
import { Brands } from "@/Content/Brands";
import Testimonies from "@/Content/Testimonies";
import { Team } from "@/Content/Team";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Banner title="About Us" page="About Us" />
      <About />
      <Num />
      <Testimonies />
      <Team />
      <Brands />
    </main>
  );
};

export default page;
