import React from "react";
import Banner from "@/Components/Banner";
import { About } from "@/Content/About";
import { Num } from "@/Content/Num";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Banner title="About Us" page="About Us" />
      <About />
      <Num />
    </main>
  );
};

export default page;
