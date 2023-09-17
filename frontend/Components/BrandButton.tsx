import React from "react";

interface BrandButtonProps {
  title: string;
  className?: string;
}

const BrandButton: React.FC<BrandButtonProps> = ({
  title,

  className,
}) => {
  return (
    <button
      className={`bg-brand_primary-100 text-brand_primary-50 rounded-lg p-3 outline-none ${className}`}
    >
      {title}
    </button>
  );
};

export default BrandButton;
