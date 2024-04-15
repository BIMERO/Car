import React from "react";
import { CiSearch } from "react-icons/ci";

export const Side = () => {
  return (
    <section>
      <header className="bg-brand_primary-50 rounded-lg">
        <h2>Search</h2>
        <div className="flex items-center gap-3 bg-brand_primary-50 w-fit h-10 border border-brand_primary-100 rounded-lg p-3">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="outline-none"
          />
          <CiSearch />
        </div>
      </header>
    </section>
  );
};
