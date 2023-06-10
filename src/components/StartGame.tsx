"use client";

import { useGame } from "@/lib/contexts/GameProvider";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const StartGame = () => {
  const [answerTimeSec, setAnswerTimeSec] = useState<number>(60);

  const { push } = useRouter();
  const { createGame } = useGame();

  const startGame = useCallback(() => {
    console.log("ANSWER TIME", answerTimeSec);
    createGame(answerTimeSec);
    push("/game");
  }, [answerTimeSec, createGame, push]);

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="form-control">
        <label>
          <span className="label-text">
            Time for answers:{" "}
            <span className="font-bold italic">{answerTimeSec}</span> seconds
          </span>
          <input
            className="range"
            type="range"
            min={30}
            max={120}
            value={answerTimeSec}
            step="30"
            onChange={(e) => setAnswerTimeSec(parseInt(e.target.value))}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </label>
      </div>
      <button className="btn btn-lg" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};
