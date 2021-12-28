import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./styles/Home.css";
import Avatar from "../assets/Avatar.png";
import BlogsList from "./BlogsList";
import Socials from "./Socials";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { ImCross } from "react-icons/im";

const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = React.useState(0);
  const location = useLocation();
  const width = window.innerWidth;

  return (
    <div className="Home__Main">
      <div className="Home__Left">
        <div className="Home__Details">
          <img
            className="Home__Image"
            src={Avatar}
            alt="Img"
            onClick={() => console.log(`${process.env.REACT_APP_SECRET_PATH}`)}
          />
          <h1>Anusikh Panda</h1>
          <h3>Full Time Software Engineer, </h3>
          <h3>Part time Eccedentesiast</h3>
          <div className="Home__Socials">
            <Socials />
          </div>
        </div>

        {/* //TODO: Add a dropdown menu component here */}
        <div className="Home__Menu">
          {isClicked === 0 ? (
            <TiThMenu size={25} onClick={() => setIsClicked(1)} />
          ) : (
            <ImCross size={24} onClick={() => setIsClicked(0)} />
          )}
        </div>

        {isClicked === 1 ? (
          <div className="Home__MenuDropDown">
            <div
              className="Home__MenuDropDownItem"
              onClick={() => {
                navigate("/");
              }}
            >
              Blogs
            </div>
            <div
              className="Home__MenuDropDownItem"
              onClick={() => {
                navigate("/projects");
              }}
            >
              Projects
            </div>
          </div>
        ) : null}

        <div className="Home__BackButton">
          <MdOutlineArrowBackIos
            size={24}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>

        {width > 800 ? (
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
                console.log(process.env.REACT_APP_SECRET_PATH);
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
