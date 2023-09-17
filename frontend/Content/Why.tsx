import React from "react";
import reason from "@/Data/reason.json";

export const Why = () => {
  return (
    <section className="px-5 py-20 bg-brand_primary-100">
      <div className="contain text-brand_primary-50">
        <header className="mb-4">
          <h2 className="text-6xl mb-8">Why choose us?</h2>
          <h3 className="text-2xl mb-4">
            We Are Dedicated To Provide Quality Service.
          </h3>
          <p>
            There are many variations of passages available but the majority
            have suffered alteration in some form going to use a passage by
            injected humour randomised words which don&apos;t look even slightly
            believable.
          </p>
        </header>
        <div className="items-center gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {reason.map((item) => {
            return (
              <div
                key={item.id}
                className="p-3 bg-brand_primary-50 rounded-xl drop-shadow-sm text-brand_neutral-150"
              >
                <h2 className="fill text-2xl bg-brand_primary-100 p-4 rounded-full w-16 h-16 text-center mb-4">
                  {item.num}
                </h2>
                <p className="text-2xl font-medium mb-3"> {item.header} </p>
                <p> {item.para} </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
