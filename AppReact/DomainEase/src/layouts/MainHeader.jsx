import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const handleMyAccountClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      navigate("/domainManagement");
    }
  };

  return (
    <header className="bg-17375E text-white shadow-md w-full">
      <div className="w-full px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-lg font-afacad hover:text-gray-200">
          Domain Ease
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="text-white font-afacad hover:text-yellow-400"
          >
            Admin
          </Link>
          <button
            onClick={handleMyAccountClick}
            className="px-4 py-2 bg-accent text-white rounded-md shadow-md hover:bg-yellow-400 transition font-afacad"
          >
            My Account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
