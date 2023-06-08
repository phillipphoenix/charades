"use client";

import { useGame } from "@/lib/contexts/GameProvider";
import { FC } from "react";

export const Game: FC = () => {
  const { currentAnswer, gotoNextAnswer, endGame } = useGame();

  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-2xl">Game in progress</h2>

      <div className="flex flex-col items-center gap-1">
        <button className="btn btn-lg btn-primary" onClick={gotoNextAnswer}>
          Next! 🤙
        </button>
        <p className="text-center">
          Give the device to the next person and tell
          <br />
          them to click &quot;Next!&quot; to get an answer to mime.
        </p>
      </div>
      <div className="flex flex-col items-center py-6">
        <p className="font-bold">Mime this:</p>
        <p className="text-6xl">{currentAnswer}</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button className="btn btn-lg" onClick={endGame}>
          End Game
        </button>
        <p className="text-center">Ends the current game.</p>
      </div>
    </div>
  );
};
