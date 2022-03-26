import React from "react";
import { FaGithubAlt } from "react-icons/fa";
import "./styles/Projects.css";
import x from "./utils/projects.json";

function Projects() {
  return (
    <div className="Project__Main">
      {Object.keys(x).map((i) => {
        return (
          <div className="Project__Container" key={i}>
            <div className="Project__Header">{x[i].heading}</div>
            <div className="Project__Body">
              <img
                className="Project__Image"
                src={x[i].imageUrl}
                alt="Loading"
              />
              <div className="Project__Description">
                {`${x[i].description}`}
                {x[i].url !== "" ? (
                  <button
                    className="Project__Url"
                    onClick={() => window.open(x[i].url, "_blank")}
                  >
                    <FaGithubAlt size={20} />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
