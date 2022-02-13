import React from "react";
import "../components/styles/Home.css";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";

function Socials() {
  const soc_links = [
    "https://github.com/anusikh",
    "https://linkedin.com/anusikh",
    "https://instagram.com/anusikh",
    "https://twitter.com/anusikh",
  ];

  const icons = [
    <FiGithub size={27} />,
    <RiLinkedinLine size={27} />,
    <FaInstagram size={27} />,
    <FiTwitter size={27} />,
  ];

  return (
    <>
      {[0, 1, 2, 3].map((i) => {
        return (
          <a
            href={soc_links[i]}
            rel="noopener noreferrer"
            target="_blank"
            className="Social__icons"
          >
            {icons[i]}
          </a>
        );
      })}
    </>
  );
}

export default Socials;
