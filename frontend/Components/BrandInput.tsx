import { type } from "os";
import React from "react";

interface BrandInputProps {
  title?: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  className?: string;
}

const BrandInput: React.FC<BrandInputProps> = ({
  title,
  type,
  name,
  id,
  placeholder,
  className,
}) => {
  return (
    <input
      className={`w-full h-10 border border-brand_primary-100 rounded-lg outline-none pl-3 capitalize ${className}`}
      title={title}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default BrandInput;
