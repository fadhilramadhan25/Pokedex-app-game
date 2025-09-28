import React from "react";
import { useNavigate } from "react-router-dom";

const StartScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative flex min-h-screen w-screen flex-col items-center justify-center
        bg-[url('/static/poke-background.gif')] bg-center bg-no-repeat bg-cover
        p-4    
      "
    >
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
        <h1
          className="
            font-arcade text-3xl xs:text-4xl sm:text-5xl md:text-6xl
            font-bold text-white drop-shadow-[5px_5px_0_black]
            text-center
          "
        >
          POKEGAMES
        </h1>

        <button
          onClick={() => navigate("/home")}
          className="
            font-arcade rounded-lg bg-black 
            px-4 py-3 text-base xs:text-lg sm:text-xl 
            text-white shadow-lg
            transition hover:bg-gray-800 active:scale-95
          "
        >
          Press Start
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 flex items-center gap-1">
        <p
          className="
            text-xs xs:text-sm sm:text-base
            text-white drop-shadow-[1px_1px_0_black]
            text-center
          "
        >
          &copy;{new Date().getFullYear()} Fadhil Ramadhan
        </p>
      </div>
    </section>
  );
};

export default StartScreen;
