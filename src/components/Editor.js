import React from "react";
import FirebaseHook from "./customHooks/FirebaseHook";
import "./styles/Editor.css";
import { BsFillDiamondFill } from "react-icons/bs";

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
  };

  const addInput = (e) => {
    res(e, heading, `${md}`);
    input.current.value = "";
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
        <div className="Editor__DeleteHeader">Delete Post(s)</div>
        {data &&
          data.map((x, i) => {
            return (
              <div key={i} className="Editor__DeleteComp">
                <BsFillDiamondFill />
                <p>{x.heading}</p>
                <button onClick={() => del(x.id)}>delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Editor;
