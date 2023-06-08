
export default function Game() {

    return (
      <main className="p-10 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Charades</h1>
          <p className="italic">A game of communication</p>
        </div>
        <Game />
      </main>
    );
  }
  