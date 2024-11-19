import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Correct package

export default function Footer() {
  return (
    <div className="github-link">
      <p className="text-center text-lg">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/dashboard"
          className="underline underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fizza Sultanova
        </a>
      </p>
      <div className="flex justify-center mt-4 mb-2">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </div>
    </div>
  );
}
