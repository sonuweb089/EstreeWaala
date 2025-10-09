import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div class="min-h-screen bg-gradient-to-br from-[#FDFCFB] to-[#E2D1C3]">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
