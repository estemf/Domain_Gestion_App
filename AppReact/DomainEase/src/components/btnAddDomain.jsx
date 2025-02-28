import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupMessage from "./popUpMessage";
import { createDomain, checkIfDomainExists } from "../api/manageDomains";

const BtnAddDomain = ({ query, onAddDomain }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [popupMessage, setPopupMessage] = useState("");
  const [redirectRoute, setRedirectRoute] = useState("");
  const [redirectText, setRedirectText] = useState("");

  const handleClick = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    if (!query) {
      setPopupMessage("Please enter a domain name");
      return;
    }

    const userId = localStorage.getItem("userId");
    try {
      const domainExists = await checkIfDomainExists(query);
      if (domainExists) {
        setPopupMessage("Domain already exists");
        setRedirectRoute("");
        setRedirectText("");
        return;
      }

      const data = await createDomain({ userId, name: query });
      if (data) {
        setPopupMessage("Domain added successfully!");
        setRedirectRoute("");
        setRedirectText("");
        onAddDomain();
      } else {
        setPopupMessage("Failed to add domain");
      }
    } catch (error) {
      console.error("Error in handleClick:", error);
      setPopupMessage("Error adding domain");
    }
  };

  return (
    <>
      <button
        className="px-4 py-2 bg-accent text-white rounded-md shadow-md transition"
        onClick={handleClick}
      >
        +
      </button>
      {popupMessage && (
        <PopupMessage
          message={popupMessage}
          onClose={() => setPopupMessage("")}
          redirectRoute={redirectRoute}
          redirectText={redirectText}
        />
      )}
    </>
  );
};

export default BtnAddDomain;
