import React from "react";
import Banner from "@/Components/Banner";
import { Side } from "@/Content/products/Side";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Banner title="Products" page="Products" />
      <div className="contain grid bg-brand_neutral-100">
        <Side />
      </div>
    </main>
  );
};

export default page;
