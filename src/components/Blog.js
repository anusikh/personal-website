import React from "react";
import { useLocation } from "react-router";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import "./styles/Blog.css";
import { toDateTime } from "./utils/utilityFunction";
import { FaCalendar } from "react-icons/fa";

function Blog() {
  const location = useLocation();
  const data = location.state.data;
  const date = toDateTime(data.date.seconds);

  const body = `${data.body}`;

  return (
    <div className="Blog__Main">
      <div className="Blog__Header">{data.heading}</div>
      <div className="Blog__Date">
        <FaCalendar />
        &nbsp;
        {date}
      </div>
      <div className="Blog__Body">
        <ReactMarkdown
          children={body}
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
}

export default Blog;
