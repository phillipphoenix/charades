"use client"

import { useGame } from "@/lib/contexts/GameProvider";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const { push } = useRouter();
  const { createGame } = useGame();

  const startGame = useCallback(() => {
    createGame();
    push("/game");
  }, [createGame, push])

  return (
    <main className="p-10 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Charades</h1>
        <p className="italic">A game of communication</p>
      </div>
      <div>
        <button className="btn btn-lg" onClick={startGame}>Start Game</button>
      </div>
    </main>
  );
}
