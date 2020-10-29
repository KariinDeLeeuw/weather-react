import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {

  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Rotterdam" />

        <footer>
          <p>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/kariindeleeuw/" target="_blank" rel="noopener noreferrer">
            Karin de Leeuw
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/KariinDeLeeuw/weather-react"
            target="_blank" rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://inspiring-leakey-6ac9dc.netlify.app/"
            target="_blank" rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
