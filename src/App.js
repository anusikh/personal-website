import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Editor from "./components/Editor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="blog/:id" element={<Blog />} />
          <Route path="projects" element={<Projects />} />
          <Route
            path={`${process.env.REACT_APP_SECRET_PATH}`}
            element={<Editor />}
          />
        </Route>
        <Route path="*" element={<p>Sorry, nothing here</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
