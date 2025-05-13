import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-pink-400 flex items-center justify-center p-4">
      <div className="text-center">
        {!open ? (
          <button
            className="relative w-32 h-32 bg-red-500 rounded-md shadow-xl transition-transform transform hover:scale-105"
            onClick={() => setOpen(true)}
          >
            <div className="absolute inset-0 bg-white rotate-45 transform scale-75 z-10 rounded-md"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-700 rounded-b-md z-0"></div>
            <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-semibold">
              Click Me
            </span>
          </button>
        ) : (
          <div className="max-w-md p-6 bg-white rounded-lg shadow-lg transition-opacity duration-500 ease-in-out">
            <h1 className="text-2xl font-bold text-pink-700 mb-4">💌 A Little Note 💌</h1>
            <p className="text-gray-800">
              Hey beautiful, would you like to go on a date with me?  
              🌹 Let's make a memory to cherish forever. 💕  
              <br />
              Waiting for your "Yes"! 😊
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
