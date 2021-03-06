import React from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import "./styles/Home.css";
import BlogsList from "./BlogsList";
import Socials from "./Socials";
import { TiThMenu } from "react-icons/ti";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { CgSun } from "react-icons/cg";
import { BiMoon } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = React.useState(0);
  const [theme, setTheme] = React.useState(0);
  const location = useLocation();
  const width = window.innerWidth;

  React.useEffect(() => {
    var r = document.querySelector(":root");
    if (theme === 1) {
      r.style.setProperty("--black", "white");
      r.style.setProperty("--white", "black");
    } else {
      r.style.setProperty("--white", "white");
      r.style.setProperty("--black", "black");
    }
  }, [theme]);

  return (
    <div className="Home__Main">
      <div className="Home__Left">
        <div className="Home__Details">
          <h1 onClick={() => navigate("/authenticate")}>Anusikh Panda</h1>
          <h3>Software Engineer</h3>

          <div className="Home__Socials">
            <Socials />
            {theme === 0 ? (
              <CgSun
                size={25}
                className="Home__ThemeButton"
                onClick={() => {
                  setTheme(1);
                }}
              />
            ) : (
              <BiMoon
                size={25}
                className="Home__ThemeButton"
                onClick={() => {
                  setTheme(0);
                }}
              />
            )}
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
