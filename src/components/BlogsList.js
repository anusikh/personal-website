import React from "react";
import BlogCard from "./BlogCard";
import FirebaseHook from "./customHooks/FirebaseHook";
import "./styles/BlogList.css";

function BlogsList() {
  // the res array contains the resultant list and all the CRUD Functions
  const res = FirebaseHook();
  const d = res[0];
  return (
    <div className="BlogList__Main">
      {d &&
        Object.keys(d).map((x, i) => {
          return <BlogCard data={d[x]} key={i} />;
        })}
    </div>
  );
}

export default BlogsList;
