import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./styles/Home.css";
import Avatar from "../assets/Avatar.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import BlogsList from "./BlogsList";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Home__Main">
      <div className="Home__Left">
        <div className="Home__Details">
          <img className="Home__Image" src={Avatar} alt="Img" />
          <h1>Anusikh Panda</h1>
          <h3>Full Time Software Engineer, </h3>
          <h3>Part time Eccedentesiast</h3>
          <div className="Home__Socials">
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
          </div>
        </div>

        <div className="Home__Links">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Blogs
          </button>
          <button
            onClick={() => {
              navigate("/projects");
            }}
          >
            Projects
          </button>
        </div>
      </div>
      <div className="Home__Outlet">
        {location.pathname === "/" ? <BlogsList /> : <Outlet />}
      </div>
    </div>
  );
};

export default Home;
