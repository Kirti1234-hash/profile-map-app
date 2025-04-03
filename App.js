import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import AdminPanel from "./components/AdminPanel";
import ProfileDetails from "./components/ProfileDetails";
import BackgroundAnimation from "./components/BackgroundAnimation";
import "./App.css";
import "./BackgroundAnimation.css";

const initialProfiles = [
  { id: 1, name: "Kirti Chavan", description: "Software Engineer", location: "New York" },
  { id: 2, name: "Aryan Joshi", description: "UI/UX Designer", location: "San Francisco" },
];

function App() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="app-container" style={{ background: "#2E2E2E", color: "#D3D3D3" }}>
        {/* 🔹 Background Animation */}
        <BackgroundAnimation />

        {/* 🔹 Header Section */}
        <header className="app-header" style={{ background: "#3A3A3A", color: "#FFFFFF" }}>
          <h1>Profile Map App</h1>
          <input
            type="text"
            placeholder="Search by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ background: "#444", color: "#FFF", border: "1px solid #666" }}
          />
        </header>

        {/* 🔹 Admin Panel */}
        <section className="admin-panel" style={{ background: "#3A3A3A" }}>
          <AdminPanel profiles={profiles} setProfiles={setProfiles} />
        </section>

        {/* 🔹 Profile List Section */}
        <main className="profile-list">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))
          ) : (
            <p>No profiles found.</p>
          )}
        </main>

        {/* 🔹 Add Profile Button (Centered Below Location) */}
        <div className="add-profile-container" style={{ marginTop: "30px" }}>
          <button className="add-profile-btn" style={{ backgroundColor: "#555", color: "white" }}>Add Profile</button>
        </div>

        {/* 🔹 Routing for Profile Details */}
        <Routes>
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
        </Routes>

        {/* 🔹 Footer Section */}
        <footer className="app-footer" style={{ background: "#3A3A3A" }}>
          <p>© 2024 Profile Map App. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
