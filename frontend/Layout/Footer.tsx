import React from "react";
import { FiPhone, FiSend } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";

export const Footer = () => {
  return (
    <section className="px-4 py-20 bg-brand_primary-200 text-brand_primary-50">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 contain">
        <div>
          <h1 className="text-brand_primary-150 text-3xl mb-6">CarShop</h1>
          <p className="mb-4">
            We are many variations of passages available but the majority have
            suffered alteration in some form by injected humour words
            believable.
          </p>
          <div>
            <p className="flex items-center gap-2 mb-3">
              <FiPhone className="bg-brand_primary-100 p-3 text-5xl text-brand_primary-50 rounded-lg" />
              +2 123 654 7898
            </p>
            <p className="flex items-center gap-2 mb-3">
              <IoLocationOutline className="bg-brand_primary-100 p-3 text-5xl text-brand_primary-50 rounded-lg" />
              25/B Milford Road, New York
            </p>
            <p className="flex items-center gap-2">
              <AiOutlineMail className="bg-brand_primary-100 p-3 text-5xl text-brand_primary-50 rounded-lg" />
              info@example.com
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-6">Quick Links</h2>
          <ul className="leading-10">
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              About us
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Update News
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Testimonials
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Terms of Service
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Privacy policy
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Our Dealers
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl mb-6">Support center</h2>
          <ul className="leading-10">
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              FAQs
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Affiliates
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Booking Tips
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Sell a Vehicle
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Contact us
            </li>
            <li className="flex items-center gap-1">
              <BiSolidRightArrow className="text-brand_primary-100" />
              Sitemap
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl mb-6">Newsletter</h2>
          <p className="mb-4">
            Subscribe Our Newsletter To Get Latest Update And News
          </p>
          <input
            type="text"
            placeholder="Your Email"
            className="border p-3 pl-4 rounded-lg mb-4"
          />
          <button className="flex items-center gap-2 justify-center bg-brand_primary-100 text-brand_primary-50 rounded-lg p-3 outline-none">
            Subscribe now <FiSend />
          </button>
        </div>
      </div>
    </section>
  );
};
