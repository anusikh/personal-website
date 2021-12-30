import React from "react";
import FirebaseHook from "./customHooks/FirebaseHook";
import "./styles/Editor.css";

function Editor() {
  const input = React.useRef(null);
  const [md, setMd] = React.useState();
  const [heading, setHeading] = React.useState();

  const res = FirebaseHook()[1];
  const data = FirebaseHook()[0];
  const del = FirebaseHook()[3];

  const clearInput = () => {
    input.current.value = "";
    input.current.focus();
    console.log(data);
  };

  const addInput = (e) => {
    res(e, heading, `${md}`);
  };

  return (
    <div className="Editor__Container">
      <div className="Editor__TextArea">
        <label>
          Heading: <input onChange={(e) => setHeading(e.target.value)} />
        </label>
        <textarea onChange={(e) => setMd(e.target.value)} ref={input} />
        <button onClick={addInput}>Add</button>
        <button onClick={clearInput}>Clear</button>
      </div>
      <div className="Editor__DeletePost">
        <div className="Editor__DeleteHeader">Click on post to delete it</div>
        {data &&
          data.map((x, i) => {
            return (
              <li key={i} onClick={() => del(x.id)}>
                {x.heading}
              </li>
            );
          })}
      </div>
    </div>
  );
}

export default Editor;
