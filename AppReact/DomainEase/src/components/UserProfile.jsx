import React from "react";

const UserProfile = ({ name, avatar }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="relative">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-24 h-24 rounded-full border-4 border-accent"
        />
      </div>
      <h2 className="text-3xl font-semibold mt-4">{name}</h2>
    </div>
  );
};

export default UserProfile;
