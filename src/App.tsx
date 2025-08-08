import React from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const contractAddress = "0xb97aD558f852ba915E8f923e17347ae895880Fe0";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Space Background */}
      <div 
        className="fixed inset-0"
        style={{
          backgroundImage: `url('/b73f9062-7b41-4da1-8122-8dfb3e5e0b9d.png')`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with SVG */}
        <header className="flex justify-center items-center py-8 px-4">
          <div className="max-w-4xl w-full flex justify-center">
            <img 
              src="/Thats-aint-all-folks.svg" 
              alt="That's ain't all folks" 
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
              }}
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 pb-16">
          {/* Hero Section */}
          <div className="text-center mb-12 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-6 tracking-wider transform hover:scale-105 transition-transform duration-300">
              PEGGERHEAD
            </h1>
            <p className="text-xl md:text-2xl text-white font-bold mb-4 drop-shadow-lg">
              💥 The $1 Peg Is Not a Dream — It's a Movement 💥
            </p>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Born in the trenches. Forged by red candles. Powered by pure meme conviction.  
  PEGGERHEAD isn't just another token — it's a full-blown degen uprising.  
  Join us as we peg our way to $1 and beyond. No brakes. No roadmap. Just vibes.
            </p>
          </div>

          {/* Contract Address */}
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-purple-500/30 max-w-md w-full">
            <h3 className="text-white font-bold text-center mb-3">Contract Address</h3>
            <div className="flex items-center justify-between bg-gray-900/70 rounded-lg p-3">
              <span className="text-green-400 font-mono text-sm break-all mr-2">
                {contractAddress}
              </span>
              <button
                onClick={copyToClipboard}
                className="flex-shrink-0 p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                {copiedAddress ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {/* Telegram */}
            <a
              href="https://t.me/+do2wvaT0p-I4M2I5"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-400/30"
            >
              <img 
                src="/Telegram-button.svg" 
                alt="Telegram" 
                className="w-16 h-16 mx-auto mb-4 group-hover:animate-bounce"
              />
              <h3 className="text-white font-bold text-xl mb-2">Join Telegram</h3>
              <p className="text-blue-100 text-sm">Connect with the community</p>
              <ExternalLink className="w-4 h-4 text-blue-200 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/PeggerHead"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-600/30"
            >
              <img 
                src="/twitter-button.svg" 
                alt="Twitter/X" 
                className="w-16 h-16 mx-auto mb-4 group-hover:animate-bounce"
              />
              <h3 className="text-white font-bold text-xl mb-2">Follow on X</h3>
              <p className="text-gray-300 text-sm">Latest updates & memes</p>
              <ExternalLink className="w-4 h-4 text-gray-400 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* DexScreener */}
            <a
              href="https://dexscreener.com/pulsechain/0x92aec47830f3d938e935247643331cb2bda1dce9"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-green-400/30"
            >
              <img 
                src="/Buy-button.svg" 
                alt="Buy" 
                className="w-16 h-16 mx-auto mb-4 group-hover:animate-bounce"
              />
              <h3 className="text-white font-bold text-xl mb-2">View Chart</h3>
              <p className="text-green-100 text-sm">Track price & volume</p>
              <ExternalLink className="w-4 h-4 text-green-200 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Fun Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl w-full">
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-500/20">
              <div className="text-2xl font-bold text-yellow-400">🌌</div>
              <div className="text-white font-semibold">To The Moon</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-500/20">
              <div className="text-2xl font-bold text-blue-400">💎</div>
              <div className="text-white font-semibold">Diamond Hands</div>
            </div>
            <div className="bg-pink-900/30 backdrop-blur-sm rounded-xl p-4 text-center border border-pink-500/20">
              <div className="text-2xl font-bold text-pink-400">🚀</div>
              <div className="text-white font-semibold">$PHEAD TO $1</div>
            </div>
            <div className="bg-green-900/30 backdrop-blur-sm rounded-xl p-4 text-center border border-green-500/20">
              <div className="text-2xl font-bold text-green-400">⚡</div>
              <div className="text-white font-semibold">PulseChain</div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 px-4">
          <p className="text-gray-400 text-sm">
            © 2024 PEGGERHEAD • Built on PulseChain • Not Financial Advice
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Always DYOR (Do Your Own Research) before investing in any cryptocurrency
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
      `}</style>
    </div>
  );
}

export default App;