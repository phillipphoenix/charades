export default function Home() {
  return (
    <main className="p-10 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Charades</h1>
        <p className="italic">A game of communication</p>
      </div>
      <div>
        <button className="text-xl px-4 py-3 border-2 border-gray-500 rounded-lg hover:bg-slate-200">Start Game</button>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl">Game in progress</h2>
        
        <div className="flex flex-col items-center gap-1">
          <button className="text-xl px-4 py-3 border-2 border-gray-500 rounded-lg hover:bg-slate-200">Next! 🤙</button>
          <p className="text-center">Give the device to the next person and tell<br/>them to click &quot;Next!&quot; to get an answer to mime.</p>
        </div>
        <div className="flex flex-col items-center py-6">
          <p className="font-bold">Mime this:</p>
          <p className="text-6xl">Elefant</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <button className="text-xl px-4 py-3 border-2 border-gray-500 rounded-lg hover:bg-slate-200">End Game</button>
          <p className="text-center">Ends the current game.</p>
        </div>
      </div>
    </main>
  );
}
