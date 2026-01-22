import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const { user, ready } = useContext(UserContext);

const promoData = [
  {
    title: "DOGE LAUNCH",
    text: "Ride the meme to the moon. New x100 odds!",
    imgSrc: "/a3.png", 
    borderColor: "border-blue-400/40"
  },
  {
    title: "CYBER GIVEAWAY",
    text: "Win a real Cybertruck with MuskCoin. Enter now!",
    imgSrc: "/a4.png",
    borderColor: "border-purple-400/40"
  },
  {
    title: "DIAMOND HANDS",
    text: "Hold your crypto! High-stakes, no-limit betting.",
    imgSrc: "/a5.png", 
    borderColor: "border-red-400/40"
  }
];

  const navItems = [
    { label: 'Wallet', icon: '💰' },
    { label: 'Withdraw', icon: '💵' },
    { label: 'Deposit', icon: '🏦' },
    { label: 'Invite', icon: '🎁' }
  ];

  const sponsors = [
    { name: "Binance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Binance_Logo.svg" },
    { name: "Coinbase", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PWHE9jwmK8vrSj70JYNy4di4DWui9XTg3A&s" },
    { name: "MetaMask", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ymr3UNKopfI0NmUY95Dr-0589vG-91KuAA&s" }
  ];

  if (!ready) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white font-black tracking-widest">
      INITIALIZING SECURE SESSION...
    </div>
  );

  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col lg:flex-row">
      
      {/* DESKTOP SIDEBAR - Slim, Thick Glassy Border */}
      <aside className="hidden lg:flex flex-col w-20 bg-white/5 backdrop-blur-xl border-r-[5px] border-blue-500/40 h-screen sticky top-0 flex-shrink-0 items-center py-10 z-40 shadow-[10px_0_30px_rgba(59,130,246,0.1)]">
        <div className="mb-12">
          <img src="/logo.png" alt="L" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
        </div>
        <nav className="flex flex-col gap-10">
          {navItems.map(item => (
            <button key={item.label} className="group relative flex flex-col items-center">
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                {item.icon}
              </span>
              <span className="absolute left-16 scale-0 group-hover:scale-100 transition-all bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded shadow-xl whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 lg:p-10 pb-32 lg:pb-10 overflow-x-hidden">
        
        {/* User Welcome Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-black tracking-tighter">Control Center</h2>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">
              Live Terminal <span className="text-blue-500 ml-2">@{user?.name}</span>
            </p>
          </div>
          <div className="flex items-center gap-3 bg-blue-500/10 border-2 border-blue-500/30 px-5 py-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
            <span className="text-green-500 text-[10px] font-black uppercase tracking-widest">Network Online</span>
          </div>
        </div>

        {/* TOP ROW: BALANCE & SLIDING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* BALANCE CARD */}
          <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2.5rem] p-10 border-4 border-white/10 shadow-2xl">
            <div className="relative z-10">
              <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-2 opacity-70">Net Assets</p>
              <h3 className="text-6xl font-black tracking-tighter mb-8">
                ${user?.balance?.toLocaleString()}
              </h3>
              <div className="flex gap-4">
                <Link to='/withdraw'><button className="bg-white text-blue-900 px-8 py-3 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all">DEPOSIT</button></Link>
                
                <Link to='/withdraw'><button className="bg-black/20 border border-white/20 px-8 py-3 rounded-2xl font-black text-sm hover:bg-black/40 transition-all">WITHDRAW</button></Link>
              </div>
            </div>
            <img src="/logo.png" className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12 pointer-events-none" />
          </div>

          {/* SLIDING PROMO CARDS */}
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
            <div className="min-w-[280px] bg-gradient-to-r from-purple-600 to-blue-600 rounded-[2rem] p-6 border-2 border-white/20 shadow-lg">
               <h4 className="font-black text-lg italic">2X MULTIPLIER</h4>
               <p className="text-xs font-bold opacity-80 mb-4">Active on Musk Slots</p>
               <button className="text-[10px] font-black bg-black/20 px-4 py-1.5 rounded-full border border-white/20">BOOST NOW</button>
            </div>
            <div className="min-w-[280px] bg-gradient-to-r from-orange-500 to-red-600 rounded-[2rem] p-6 border-2 border-white/20 shadow-lg">
               <h4 className="font-black text-lg italic uppercase">Daily Drop</h4>
               <p className="text-xs font-bold opacity-80 mb-4">Play Games, get Rewards!</p>
               <button className="text-[10px] font-black bg-black/20 px-4 py-1.5 rounded-full border border-white/20">REDEEM</button>
            </div>
          </div>
        </div>

        {/* SECOND ROW: STATS & WINNINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* STATS */}
          <div className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-[2rem] p-8">
            <h4 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Performance</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>WIN RATE</span>
                  <span className="text-blue-400">72%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[72%] shadow-[0_0_10px_#3b82f6]"></div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <span className="text-slate-500 text-[10px] font-black block mb-1">TOTAL BETS</span>
                <span className="text-3xl font-black tracking-tighter">0.00</span>
              </div>
            </div>
          </div>

          {/* LIVE WINNINGS TABLE */}
          <div className="lg:col-span-2 bg-[#0b1120] border-2 border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="px-8 py-5 border-b border-white/10 bg-white/5 flex justify-between items-center">
              <h3 className="font-black text-sm uppercase tracking-widest">Live Network Payouts</h3>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <table className="w-full">
              <thead className="bg-white/5 text-[10px] font-black text-slate-500 uppercase">
                <tr>
                  <th className="px-8 py-4 text-left">User</th>
                  <th className="px-8 py-4 text-left">Source</th>
                  <th className="px-8 py-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm font-bold">
                <tr className="border-b border-white/5">
                  <td className="px-8 py-4 text-blue-400">mik***42</td>
                  <td className="px-8 py-4 text-slate-400">Crypto Crash</td>
                  <td className="px-8 py-4 text-right text-green-400">+$1,240.50</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="px-8 py-4 text-blue-400">dav***09</td>
                  <td className="px-8 py-4 text-slate-400">Bonus Drop</td>
                  <td className="px-8 py-4 text-right text-green-400">+$1010.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
            {/* cards 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
  {promoData.map((card, index) => (
    <div 
      key={index} 
      className={`relative group overflow-hidden bg-[#0f172a] border-4 ${card.borderColor} rounded-[2rem] shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] flex flex-col`}
    >
      {/* IMAGE AREA */}
      <div className="w-full max-h-full overflow-hidden border-b-4 border-white/10">
        <img 
          src={card.imgSrc} 
          alt={card.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT CONTENT - Always below the image */}
      <div className="p-6 text-center">
        <h3 className="text-2xl font-black italic tracking-tighter text-yellow-400 mb-3 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {card.title}
        </h3>
        <p className="text-slate-300 text-sm font-bold leading-relaxed px-2">
          {card.text}
        </p>
        
        {/* Optional Action Button to make it look like a real game UI */}
        <button className="mt-6 w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all">
          Play Game
        </button>
      </div>

      {/* Bottom Glowing Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
    </div>
  ))}
</div>

        {/* SPONSORS FOOTER */}
        <footer className="mt-20 py-10 border-t border-white/5 flex flex-col items-center">
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] mb-8">Institutional Partners</p>
          <div className="flex flex-wrap justify-center gap-10 opacity-20 grayscale">
            {sponsors.map(s => (
              <img key={s.name} src={s.logo} alt={s.name} className="h-6" />
            ))}
          </div>
        </footer>
      </main>

      {/* MOBILE BOTTOM TABS - Floating, Thick Glowing Glassy Border */}
      <nav className="lg:hidden fixed bottom-6 left-6 right-6 bg-[#0f172a]/80 backdrop-blur-2xl border-[4px] border-blue-500/50 rounded-[2rem] px-8 py-4 flex justify-between z-50 shadow-[0_10px_40px_rgba(59,130,246,0.3)] ring-1 ring-white/20">
        {navItems.map(item => (
          <button key={item.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">{item.icon}</span>
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-tighter">{item.label}</span>
          </button>
        ))}
      </nav>

    </div>
  );
};

export default Dashboard;