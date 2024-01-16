// App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import SocialLinksPage from "./pages/SocialLinksPage"; // Adjust the path accordingly
import Homepage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/social-links" element={<SocialLinksPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;
