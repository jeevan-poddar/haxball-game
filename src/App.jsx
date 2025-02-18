import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./page/Home";
import News from "./page/News";
import Play from "./page/Play";
import About from "./page/About";
import Community from "./page/Community";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/play" element={<Play />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
