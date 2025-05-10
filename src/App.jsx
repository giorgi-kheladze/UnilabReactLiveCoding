import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import GamePage from "./pages/GamePage";
import Test from "./pages/Test";
import Final from "./pages/Final";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#26362C] py-[32px] px-[61px]">
      <p className="text-[#EFF9F3] text-[20px] font-bold">DogFinder</p>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/game" element={<GamePage />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/final" element={<Final />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
