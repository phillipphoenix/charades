"use client"

import { FC, ReactNode, createContext, useCallback, useContext, useState } from "react";

const fullAnswerPool = ["Pig", "Bear", "Bucket", "School"];

const useGameContextValue = () => {
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
    const [answerPool, setAnswerPool] = useState<string[]>(fullAnswerPool);
    const [currentAnswer, setCurrentAnswer] = useState<string | undefined>();
    const [team1Points, setTeam1Points] = useState<number>(0);
    const [team2Points, setTeam2Points] = useState<number>(0);


    const createGame = useCallback(() => {
        setAnswerPool(fullAnswerPool);
        setCurrentAnswer(undefined);
        setTeam1Points(0);
        setTeam2Points(0);
    }, [setAnswerPool, setCurrentAnswer, setTeam1Points, setTeam2Points]);

    const gotoNextAnswer = useCallback(() => {
        const [nextAnswer, ...rest] = answerPool;
        setCurrentAnswer(nextAnswer);
        setAnswerPool(rest);
    }, [answerPool, setAnswerPool, setCurrentAnswer])

    const addPointToTeam1 = useCallback(() => {
        setTeam1Points((cur) => cur + 1);
    },[setTeam1Points])

    const addPointToTeam2 = useCallback(() => {
        setTeam2Points((cur) => cur + 1);
    },[setTeam2Points])

    const endGame = useCallback(() => {
        setIsGameStarted(false);
    }, [setIsGameStarted])

    return { isGameStarted, currentAnswer, team1Points, team2Points, createGame, gotoNextAnswer, addPointToTeam1, addPointToTeam2, endGame };
}

const dummyGameContextValue: ReturnType<typeof useGameContextValue> = {
    isGameStarted: false,
    createGame: () => {},
    endGame: () => {},
    gotoNextAnswer: () => {},
    currentAnswer: undefined,
    team1Points: 0,
    team2Points: 0,
    addPointToTeam1: () => {},
    addPointToTeam2: () => {},
}

const GameContext = createContext<ReturnType<typeof useGameContextValue>>(dummyGameContextValue);

type Props = {
    children: ReactNode;
}

export const GameContextProvider: FC<Props> = ({children}) => {
    const gameContextValue = useGameContextValue();

    return <GameContext.Provider value={gameContextValue}>{children}</GameContext.Provider>
}

export const useGame = () => useContext(GameContext);