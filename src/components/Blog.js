import React from "react";
import { useParams } from "react-router";

function Blog() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Blog;
