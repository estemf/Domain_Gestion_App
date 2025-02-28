import React from "react";

const Card = ({ title, available }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center p-6">
        {/* Titre */}
        <h2 className="text-2xl font-semibold text-gray-800 mr-8">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
