import React from "react";
import { useNavigate } from "react-router-dom";

const PopupMessage = ({
  message,
  onClose,
  redirectRoute,
  redirectText,
  isValidationPopup,
  onConfirm,
}) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded text-black shadow-md">
        <p>{message}</p>
        <button
          onClick={onClose} // Directly close the popup without confirmation
          className="mt-4 px-4 py-2 bg-accent text-white rounded"
        >
          Cancel
        </button>
        {isValidationPopup && (
          <button
            onClick={onConfirm} // Confirm the deletion
            className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Confirm
          </button>
        )}
        {redirectRoute && (
          <button
            onClick={() => navigate(redirectRoute)}
            className="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded"
          >
            {redirectText}
          </button>
        )}
      </div>
    </div>
  );
};

export default PopupMessage;
