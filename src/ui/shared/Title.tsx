import React from "react";

interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      {/* Dynamic Title */}
      <h1 className="text-3xl md:text-6xl text-primary text-center mb-2 relative">
        <span className="relative z-10">{title}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary opacity-30 blur-md z-0"></span>
      </h1>

      {subtitle && (
        <p className="text-lg md:text-2xl text-gray-600 text-center italic">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
