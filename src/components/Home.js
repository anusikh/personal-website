import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./styles/Home.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="Home__Main">
      <div className="Home__Left">
        <div className="Home__Details">
          <h1>Anusikh Tanmaya Panda</h1>
          <h3>Full Time Software Engineer, Part time Eccedentesiast</h3>
          <div className="Home__Socials">
            <FaGithub size={33} />
            <FaLinkedin size={33} />
            <FaInstagram size={33} />
            <FaTwitter size={33} />
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
              navigate("/blog/1");
              console.log(location);
            }}
          >
            Projects
          </button>
        </div>
      </div>
      <div className="Home__Outlet">
        {location.pathname === "/" ? <>H1</> : <Outlet />}
      </div>
    </div>
  );
};

export default Home;
