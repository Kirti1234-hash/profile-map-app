import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <p>Profile not found.</p>;

  return (
    <div className="profile-details-container" style={{ background: "#2E2E2E", color: "#D3D3D3", padding: "20px", borderRadius: "10px" }}>
      <h2>{profile.name}</h2>
      <p><strong>Role:</strong> {profile.description}</p>
      <p><strong>Location:</strong> {profile.location}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
      <p><strong>Interests:</strong> {profile.interests}</p>

      {/* Leaflet Map */}
      <h3>Location on Map:</h3>
      <MapComponent latitude={37.7749} longitude={-122.4194} />

      {/* Close Button */}
      <button 
        onClick={() => navigate(-1)} 
        style={{ marginTop: "20px", padding: "10px 20px", background: "#555", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Close
      </button>
    </div>
  );
};

export default ProfileDetails;
