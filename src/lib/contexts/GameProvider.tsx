"use client";

import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import fullAnswerPool from "@/lib/data/answers-da.json";

const useGameContextValue = () => {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [answerTimeSec, setAnswerTimeSec] = useState<number>(60);
  const [answerPool, setAnswerPool] = useState<string[]>(fullAnswerPool);
  const [currentAnswer, setCurrentAnswer] = useState<string | undefined>();
  const [team1Points, setTeam1Points] = useState<number>(0);
  const [team2Points, setTeam2Points] = useState<number>(0);

  const createGame = useCallback(
    (answerTimeInSeconds: number) => {
      setAnswerTimeSec(answerTimeInSeconds);
      setAnswerPool(fullAnswerPool);
      setCurrentAnswer(undefined);
      setTeam1Points(0);
      setTeam2Points(0);
    },
    [setAnswerPool, setCurrentAnswer, setTeam1Points, setTeam2Points]
  );

  const gotoNextAnswer = useCallback(() => {
    const getRandomNextAnswer = () => {
      const availableAnswers = [...answerPool];
      // Generate a random index within the array bounds
      var randomIndex = Math.floor(Math.random() * availableAnswers.length);
      // Save the random item in a variable
      var randomItem = availableAnswers[randomIndex];
      // Remove the item from the array using splice
      availableAnswers.splice(randomIndex, 1);
      return { nextAnswer: randomItem, answersLeft: availableAnswers };
    };

    const { nextAnswer, answersLeft } = getRandomNextAnswer();
    setCurrentAnswer(nextAnswer);
    setAnswerPool(answersLeft);
  }, [answerPool, setAnswerPool, setCurrentAnswer]);

  const addPointToTeam1 = useCallback(() => {
    setTeam1Points((cur) => cur + 1);
  }, [setTeam1Points]);

  const addPointToTeam2 = useCallback(() => {
    setTeam2Points((cur) => cur + 1);
  }, [setTeam2Points]);

  const endGame = useCallback(() => {
    setIsGameStarted(false);
  }, [setIsGameStarted]);

  return {
    isGameStarted,
    answerTimeSec,
    currentAnswer,
    team1Points,
    team2Points,
    createGame,
    gotoNextAnswer,
    addPointToTeam1,
    addPointToTeam2,
    endGame,
  };
};

const dummyGameContextValue: ReturnType<typeof useGameContextValue> = {
  isGameStarted: false,
  answerTimeSec: 60,
  createGame: () => {},
  endGame: () => {},
  gotoNextAnswer: () => {},
  currentAnswer: undefined,
  team1Points: 0,
  team2Points: 0,
  addPointToTeam1: () => {},
  addPointToTeam2: () => {},
};

const GameContext = createContext<ReturnType<typeof useGameContextValue>>(
  dummyGameContextValue
);

type Props = {
  children: ReactNode;
};

export const GameContextProvider: FC<Props> = ({ children }) => {
  const gameContextValue = useGameContextValue();

  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
