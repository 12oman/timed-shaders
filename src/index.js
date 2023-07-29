import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement); // Create the root using createRoot
  // Render the App inside the root
  const renderApp = () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  };
  
  // Setup a timer to update the shapes every second
  setInterval(renderApp, 2000);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
