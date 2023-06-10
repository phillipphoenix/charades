import { StartGame } from "@/components/StartGame";

export default function Home() {
  return (
    <main className="p-10 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Charades</h1>
        <p className="text-center italic">A game of communication</p>
      </div>
      <div className="text-center">
        <h2 className="text-2xl mb-2">How to play</h2>
        <p className="mb-2">
          🙆‍♂️ Each team takes turns sending one person to{" "}
          <span className="italic font-bold text-primary">
            mime a word or sentence
          </span>
          . The person can indicate if the answer is a word or a sentence and
          how many words it is.
        </p>
        <p className="mb-2">
          ⌚ His or her team then need to{" "}
          <span className="italic font-bold text-primary">
            guess the word or sentence
          </span>{" "}
          before the time is up. It is okay, if{" "}
          <span className="italic font-bold text-primary">
            the sentence is not exactly the same
          </span>{" "}
          as the answer.
        </p>
        <p className="mb-2">
          🤷‍♂️ If the team can&apos;t guess the answer,{" "}
          <span className="italic font-bold text-primary">
            the other team gets a chance to guess
          </span>
          .
        </p>
        <p className="mb-2">
          🎉 The team that guessed the answer gets a point.
        </p>
        <p className="mb-2">🏆 The team with the most points wins.</p>
      </div>
      <StartGame />
    </main>
  );
}
