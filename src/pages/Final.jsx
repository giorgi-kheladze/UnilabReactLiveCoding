import React from "react";
import { useNavigate } from "react-router";

const Final = () => {
  const score = 15;
  const timer = 20;
  let navigate = useNavigate();
  const play = () => {
    navigate("/game");
  };

  return (
    <div className="w-ful flex justify-center">
      <div className="max-w-[400px] flex flex-col items-center gap-[34px] mt-[187px]">
        <h3 className="text-[#EFF9F3] text-[32px] font-bold">
          Congratulations!
        </h3>
        <p className="text-[#EFF9F3]">
          {`You have scored ${score} in ${timer}`}
        </p>
        <button
          onClick={play}
          className="px-[20px] py-[9px] bg-[#33D570] rounded-[12px] text-[white] cursor-pointer w-[126px]"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default Final;
