import React, { useState } from "react";
import { deleteDomainById } from "../api/managedomains";
import PopupMessage from "../components/popupmessage";

const DomaineCard = ({ domainId, title, refreshDomains }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteConfirmation = async () => {
    setShowPopup(false); // Fermer la pop-up de confirmation
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteDomainById(domainId);
      console.log(`Domain deleted: ${title}`);
      refreshDomains();
    } catch (error) {
      console.error("Failed to delete domain:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleClick = () => {
    setShowPopup(true); // Afficher la pop-up de confirmation
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Fermer la pop-up si l'utilisateur annule
  };

  return (
    <div className="w-[800px] h-[80px] bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center h-full p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {title}
        </h2>
        <div className="ml-auto flex items-center">
          <div className="h-14 border-l-2 border-gray-300 mx-4"></div>
          <button 
            onClick={handleClick} 
            disabled={isDeleting}
            className="flex items-center p-2 hover:bg-gray-50 rounded-lg transition-colors disabled:opacity-50">
            <img 
              src="/picture/Delete-logo.png"
              alt="Delete" 
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>

      {/* Affichage de la pop-up de validation */}
      {showPopup && (
        <PopupMessage
          message={`Are you sure you want to delete the domain "${title}" ?`}
          onClose={handleClosePopup}
          isValidationPopup={true}
          onConfirm={handleDeleteConfirmation} // Ajout d'une fonction de confirmation
        />
      )}
    </div>
  );
};

export default DomaineCard;
