import { useState } from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-red-200 to-pink-300 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="animate-pulse text-pink-300 text-7xl absolute top-10 left-10">❤️</div>
        <div className="animate-ping text-red-400 text-6xl absolute top-32 right-20">💌</div>
        <div className="animate-bounce text-pink-500 text-8xl absolute bottom-20 left-1/2 transform -translate-x-1/2 z-0">💕</div>
      </div>
      {!isOpen ? (
        <div
          onClick={() => setIsOpen(true)}
          className="bg-white rounded-xl p-6 shadow-lg flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105 text-center"
        >
          <FaEnvelopeOpenText className="text-red-500 text-5xl mb-2" />
          <p className="text-gray-700 text-lg font-medium">Click to open</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto animate-fade-in text-center z-10">
          <h2 className="text-2xl font-bold mb-3 text-pink-600">Ms. Sneha Phalswal,</h2>
          <p className="text-lg mb-4">It’s genuinely rare to come across someone like you - beautiful, grounded, and with such a warm nature. In this generation, it feels almost impossible to find someone so effortlessly genuine. I can tell you’re the busy, focused type, and I completely respect that.</p>
          <p className="text-lg mb-4">
            But I have a small confession… I’ve never really been the type to chase or constantly message someone, but with you - it’s different. You’re the first girl who’s made me curious to know everything about her, to just have real conversations and enjoy her presence.</p>
          <p className="text-lg mb-4">
            Your smile - honestly, I don’t even have words for it. It just makes my day. I won’t lie, I wait for your messages more than I probably should, and every notification I get, a part of me hopes it's you. It’s like you’ve quietly become an obsession, the good kind.</p>
          <p className="text-lg mb-2">
            If you don’t mind, I’d really love to take you out on a date sometime. Just to know you better, to make you laugh in person, and to give you my full attention. I understand if you're not ready, or if the timing isn’t right—I just wanted to be honest about how I feel. 💖</p>
          <p className="text-xl font-semibold mb-4">Will you go on a date with me? 🌹</p>
          <p className="text-right italic">— Just your humble admirer and biggest fan of your smile. ❤️</p>
        </div>
      )}
    </div>
  );
}

export default App;
