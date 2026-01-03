import { useState } from "react";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container">
      <h1>Riddhi's Website</h1>

      <div className="tabs">
        <button
          className={activeTab === "about" ? "tab active" : "tab"}
          onClick={() => setActiveTab("about")}
        >
          About Me
        </button>

        <button
          className={activeTab === "projects" ? "tab active" : "tab"}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>

        <button
          className={activeTab === "resume" ? "tab active" : "tab"}
          onClick={() => setActiveTab("resume")}
        >
          Resume
        </button>

        <button
          className={activeTab === "other" ? "tab active" : "tab"}
          onClick={() => setActiveTab("other")}
        >
          Other
        </button>
      </div>

      <div className="content">
        {activeTab === "about" && (
          <>
            <h2>About Me</h2>
            <p>
            Hi, my name is Riddhi Mundhra. I am a third-year Computer Science: Game Design student at the University of California, Santa Cruz. My interests include mobile app development, systems engineering, and artificial intelligence and machine learning. I am currently a web developer at the Tech4Good Lab at UCSC and an active member of the AIEA club, which focuses on AI research and innovation.     
            </p>
          </>
        )}

        {activeTab === "projects" && (
          <>
            <h2>Projects</h2>
            <p>
              Projects page —{" "}
              <a
                href="https://github.com/rm89090000"
                target="_blank"
                rel="noopener noreferrer"
              >
                View my GitHub
              </a>
            </p>
          </>
        )}

        {activeTab === "resume" && (
          <>
            <h2>Resume</h2>
            <p>Download my resume:</p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              📄 Resume.pdf
            </a>
          </>
        )}

        {activeTab === "other" && (
          <>
            <h2>Other</h2>
            <p>
              My other interests include writing novels (particularly fantasy) and songs! 
            </p>
          </>
        )}
      </div>
    </div>
  );
}
