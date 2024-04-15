import React from "react";
import Link from "next/link";
import { FiHeart, FiShoppingCart, FiMenu } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full overflow-hidden">
      <h1 className="text-brand_primary-150 text-3xl bg-brand_primary-50 pl-4">
        CarShop
      </h1>

      <div className="bg-brand_primary-100 py-6 pr-4 skewed">
        <div className="hidden lg:block">
          <ul className="flex items-center justify-between font-medium gap-5 text-brand_neutral-100 z-10 relative">
            <li>Home</li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/product">Products</Link>
            </li>
            <li>Blog</li>
            <li>Contact</li>
            <li>
              <FiHeart />
            </li>
            <li>
              <FiShoppingCart />
            </li>
          </ul>
        </div>
        <FiMenu className="lg:hidden text-brand_primary-50 text-3xl" />
      </div>
    </nav>
  );
};
