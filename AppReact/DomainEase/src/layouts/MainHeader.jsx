import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-17375E text-white shadow-md w-full">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        {/* Lien vers la page d'accueil */}
        <Link to="/" className="text-lg font-afacad hover:text-gray-200">
          Domain Ease
        </Link>

        {/* Section des boutons et du texte "Admin" */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="text-white font-afacad hover:text-yellow-400"
          >
            Admin
          </Link>
          <Link
            to="/domainManagement"
            className="px-4 py-2 bg-accent text-white rounded-md shadow-md hover:bg-yellow-400 transition font-afacad"
          >
            My Account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
