import React, { useState } from "react";
import profiles from "../data/profiles";

function ProfileList({ onSelectProfile }) {
  return (
    <div>
      <h2>Profile List</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {profiles.map((profile) => (
          <div key={profile.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", width: "250px" }}>
            <img src={profile.photo} alt={profile.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => onSelectProfile(profile)}>Summary</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
