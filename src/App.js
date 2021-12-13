import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="blog/:id" element={<Blog />} />
        </Route>
        <Route path="*" element={<p>Sorry, nothing here</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
