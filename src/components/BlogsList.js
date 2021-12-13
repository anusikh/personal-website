import React from "react";
import { useNavigate } from "react-router-dom";
import FirebaseHook from "./customHooks/FirebaseHook";

function BlogsList() {
  const navigate = useNavigate();
  // the res array contains the resultant list and all the CRUD Functions
  const res = FirebaseHook();

  return (
    <div>
      <button
        onClick={(e) => {
          navigate("/blog/3");
          console.log(typeof res[1]);
        }}
      >
        Projects
      </button>
    </div>
  );
}

export default BlogsList;
