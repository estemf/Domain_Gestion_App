import React from "react";

const ListingCard = ({ filteredDNS, checkDomainAvailability, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredDNS.map((dns, index) => (
        <div
          key={dns.id}
          className={`bg-white p-6 rounded-lg shadow-lg border-2 border-gray-300 transform transition-transform hover:scale-105 cursor-pointer animate-slide-in`}
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onCardClick(dns.name)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">
              {dns.name}
            </span>
            <span
              className={`text-lg font-semibold ${
                checkDomainAvailability(dns.name) === "already used"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {checkDomainAvailability(dns.name)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingCard;
