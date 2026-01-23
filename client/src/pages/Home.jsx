import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const Home = () => {
  const { user } = useContext(UserContext); // Get user status

  const sponsors = [
    { name: "Binance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg" },
    { name: "Coinbase", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Coinbase_Logo_2021.svg" },
    { name: "MetaMask", logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Logo.svg" }
  ];

  // Helper to determine where the button should go
  const dashboardLink = user ? "/dashboard" : "/register";

  return (
    <div className="min-h-screen bg-fixed bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#581c87] text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            THE FUTURE OF <br /> CRYPTO 'MuskCoin'
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10">
            Experience the most secure and lightning-fast betting platform. 
            Join now and receive a <span className="text-yellow-500 font-bold">$3000 Welcome Bonus</span> in MuskCoin.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Conditional Link: Goes to Dashboard if logged in, otherwise Register */}
            <Link 
              to={dashboardLink} 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 transition-all active:scale-95"
            >
              {user ? "ENTER DASHBOARD" : "CLAIM MY $3,000"}
            </Link>

            <Link 
              to={dashboardLink} 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-lg backdrop-blur-md transition-all"
            >
              Play Games & Win More!
            </Link>
          </div>
          
          {/* Subtle hint if not logged in */}
          {!user && (
            <p className="mt-6 text-sm text-slate-500 font-bold">
              Already a member? <Link to="/login" className="text-blue-400 underline">Login here</Link>
            </p>
          )}
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Instant Payouts", desc: "No waiting. Withdraw your winnings directly to your wallet.", icon: "⚡" },
          { title: "256-bit Security", desc: "Your data and funds are protected by military-grade encryption.", icon: "🛡️" },
          { title: "Global Events", desc: "Bet on your favorite sports and crypto movements 24/7.", icon: "🌍" }
        ].map((f, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-all cursor-default group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Sponsors Footer */}
      <footer className="border-t border-white/5 bg-[#0b1120] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <p className="text-slate-500 text-xs font-bold uppercase mb-8 tracking-[0.3em]">Official Partners</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
            {sponsors.map((s) => (
              <img key={s.name} src={s.logo} alt={s.name} className="h-8 md:h-10" />
            ))}
          </div>
          <div className="mt-12 text-slate-600 text-[10px] text-center max-w-lg">
            © 2026 MUSKCOIN PLATFORM. Licensed by International Crypto Gaming Authority. Play Responsibly.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;