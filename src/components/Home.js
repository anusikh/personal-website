import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./styles/Home.css";
import Avatar from "../assets/Avatar.png";
import BlogsList from "./BlogsList";
import Socials from "./Socials";
import { TiThMenu } from "react-icons/ti";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const width = window.innerWidth;

  return (
    <div className="Home__Main">
      <div className="Home__Left">
        <div className="Home__Details">
          <img className="Home__Image" src={Avatar} alt="Img" />
          <h1>Anusikh Panda</h1>
          <h3>Full Time Software Engineer, </h3>
          <h3>Part time Eccedentesiast</h3>
          <div className="Home__Socials">
            <Socials />
          </div>
        </div>

        {/* //TODO: Add a dropdown menu component here */}
        <div className="Home__Menu">
          <TiThMenu size={30} />
        </div>

        {width > 600 ? (
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
        ) : null}
      </div>
      <div className="Home__Outlet">
        {location.pathname === "/" ? <BlogsList /> : <Outlet />}
      </div>
    </div>
  );
};

export default Home;
