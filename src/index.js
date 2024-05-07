import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
// make an array of different timing intervals to match a drum and bass beat
// const beat = [800, 400, 400, 200, 800, 400, 400, 400];

// se a random key
// const randomKey = Math.random().toString();


if (rootElement) {
  const root = createRoot(rootElement); 
  const renderApp = () => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  };

  renderApp();
  
  // Setup a timer to update the shapes randomly from the beat array
  // setInterval(renderApp, (beat[Math.floor(Math.random() * beat.length)] * 1));
}
