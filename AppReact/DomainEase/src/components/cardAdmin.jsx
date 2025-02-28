// components/CardAdmin.js
import React from "react";

const CardAdmin = ({ title, stat, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 transform transition-transform hover:scale-105">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-4xl font-semibold text-accent mb-4">{stat}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CardAdmin;
