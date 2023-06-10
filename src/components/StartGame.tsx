"use client";

import { useGame } from "@/lib/contexts/GameProvider";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const StartGame = () => {
  const { push } = useRouter();
  const { createGame } = useGame();

  const startGame = useCallback(() => {
    createGame();
    push("/game");
  }, [createGame, push]);

  return (
    <div>
      <button className="btn btn-lg" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};
