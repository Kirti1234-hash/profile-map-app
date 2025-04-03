import React, { useState } from "react";
import "./AdminPanel.css"; // ✅ Import styles

function AdminPanel({ profiles, setProfiles }) {
  const [newProfile, setNewProfile] = useState({
    name: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleAddProfile = () => {
    if (!newProfile.name || !newProfile.description || !newProfile.location) return;

    setProfiles([...profiles, { id: Date.now(), ...newProfile }]);
    setNewProfile({ name: "", description: "", location: "" });
  };

  return (
    <div className="admin-panel">
      <h2>Manage Profiles</h2>
      <input type="text" name="name" placeholder="Name" value={newProfile.name} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={newProfile.description} onChange={handleChange} />
      <input type="text" name="location" placeholder="Location" value={newProfile.location} onChange={handleChange} />
      <div className="add-profile-container">
  <button className="add-profile-btn">Add Profile</button>
</div>

    </div>
  );
}

export default AdminPanel;
