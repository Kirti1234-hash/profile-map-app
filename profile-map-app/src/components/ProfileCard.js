import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <p>Location: {profile.location}</p>

      {/* 🔹 Link to Profile Details Page */}
      <Link to={`/profile/${profile.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default ProfileCard;
