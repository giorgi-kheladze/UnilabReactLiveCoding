import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();
  const play = () => {
    navigate("/game");
  };
  return (
    <div className="w-ful flex justify-center">
      <div className="max-w-[400px] flex flex-col items-center gap-[34px] mt-[187px]">
        <h3 className="text-[#EFF9F3] text-[32px] font-bold">
          Start dog finder game
        </h3>
        <p className="text-[#EFF9F3]">
          You will have to choose an image of a dog from 5 total pictures, try
          to get the highest score
        </p>
        <button
          onClick={play}
          className="px-[20px] py-[9px] bg-[#33D570] rounded-[12px] text-[white] cursor-pointer w-[126px]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default Home;
