import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Editor from "./components/Editor";
import Authenticate from "./components/Authenticate";
import { dataContext } from "./components/context/dataContext";
import React from "react";

function App() {
  // Context Api
  const dataCon = React.useContext(dataContext);
  const { authenticated } = dataCon;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="blog/:id" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path="editor"
            element={authenticated ? <Editor /> : <>Not Authenticated</>}
          />
          <Route path="authenticate" element={<Authenticate />} />
        </Route>
        <Route path="*" element={<p>Sorry, nothing here</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
