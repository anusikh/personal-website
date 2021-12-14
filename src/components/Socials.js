import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Socials() {
  return (
    <>
      <a
        href="https://github.com/anusikh"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub size={33} />
      </a>
      <a
        href="https://linkedin.com/anusikh"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaLinkedin size={33} />
      </a>
      <a
        href="https://instagram.com/anusikh"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaInstagram size={33} />
      </a>
      <a
        href="https://twitter.com/anusikh"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTwitter size={33} />
      </a>
    </>
  );
}

export default Socials;
