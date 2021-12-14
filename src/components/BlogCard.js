import React from "react";
import { useNavigate } from "react-router";
import { toDateTime } from "./utils/utilityFunction";
import "./styles/BlogCard.css";
import { FaCalendar } from "react-icons/fa";

function BlogCard(props) {
  const navigate = useNavigate();

  const date = toDateTime(props.data.date.seconds);

  return (
    <div className="BlogCard__Main">
      <div className="BlogCard__Heading">
        <p
          onClick={() => {
            navigate(`/blog/${props.data.id}`, { state: { data: props.data } });
          }}
        >
          {props.data.heading}
        </p>
      </div>
      <div className="BlogCard__Date">
        <FaCalendar />
        &nbsp;
        {date}
      </div>
      <div className="BlogCard__Body">{props.data.body}</div>
    </div>
  );
}

export default BlogCard;
