"use client";

import { useGame } from "@/lib/contexts/GameProvider";
import { useRouter } from "next/navigation";
import { FC, useCallback } from "react";
import { Countdown } from "./Countdown";
import useCountdown from "@bradgarropy/use-countdown";

export const Game: FC = () => {
  const {
    answerTimeSec,
    currentAnswer,
    gotoNextAnswer,
    endGame,
    addPointToTeam1,
    addPointToTeam2,
    team1Points,
    team2Points,
  } = useGame();
  const { push } = useRouter();

  const endGameAndReturn = useCallback(() => {
    endGame();
    push("/");
  }, [endGame, push]);

  const { minutes, seconds, reset } = useCountdown({
    seconds: answerTimeSec,
  });

  const nextAnswerAndResetTimer = useCallback(() => {
    gotoNextAnswer();
    reset();
  }, [gotoNextAnswer, reset]);

  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-2xl mb-2">Game in progress</h2>
      <div className="flex flex-col items-center gap-1">
        <button
          className="btn btn-lg btn-primary"
          onClick={nextAnswerAndResetTimer}
        >
          Get answer and start timer! ⌚
        </button>
      </div>
      <div className="flex flex-col items-center py-6 text-center">
        <p className="font-bold">Mime this:</p>
        <p className="text-5xl text-primary">{currentAnswer}</p>
      </div>
      <div>
        {currentAnswer && <Countdown minutes={minutes} seconds={seconds} />}
      </div>
      <div className="flex flex-col items-center py-6">
        <h3 className="text-xl mb-2">Give point to:</h3>
        <div className="join mb-2">
          <button
            className="btn join-item bg-red-500 hover:bg-red-600"
            onClick={addPointToTeam1}
          >
            Team 1
          </button>
          <button
            className="btn join-item bg-blue-500 hover:bg-blue-600"
            onClick={addPointToTeam2}
          >
            Team 2
          </button>
        </div>
        <p className="text-center">
          Give a point to the team that first came up with the correct answer.
        </p>
        <div className="stats shadow my-2">
          <div className="stat place-items-center">
            <div className="stat-title text-red-500 font-bold">Team 1</div>
            <div className="stat-value">{team1Points}</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title text-blue-500 font-bold">Team 2</div>
            <div className="stat-value">{team2Points}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <button className="btn btn-lg" onClick={endGameAndReturn}>
          End Game
        </button>
      </div>
    </div>
  );
};
