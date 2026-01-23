import { Link, useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to track current URL

  const isDashboard = location.pathname === '/dashboard';

  const handleLogout = async () => {
    try {
      await axios.post('/logout');
      setUser(null);
      setIsDropdownOpen(false);
      toast.success('Signed out successfully');
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1e1b4b]/95 backdrop-blur-lg border-b border-white/10 px-5 py-1">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LEFT: LOGO */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="MuskCoin" className="w-12 h-12 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden lg:block text-2xl font-black text-white tracking-tighter">
              MUSK<span className="text-blue-500">COIN</span>
            </span>
          </Link>
        </div>

        {/* CENTER: DYNAMIC BALANCE (Shows only on Dashboard) */}
        {isDashboard && user && (
          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="bg-blue-500/10 border border-blue-500/30 px-6 py-2 rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center gap-3">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest hidden md:block">Main Wallet</span>
              <span className="text-xl font-black text-white leading-none">
                ${user.balance?.toLocaleString()}
              </span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </div>
        )}

        {/* RIGHT: NAVIGATION/USER */}
        <div className="flex-1 flex justify-end items-center gap-6">
          {user ? (
            <div className="flex items-center gap-6 relative">
              {/* Only show Dashboard link if NOT on dashboard */}
              {!isDashboard && (
                <Link 
                  to="/dashboard" 
                  className="text-sm font-bold text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                  DASHBOARD
                </Link>
              )}

              {/* USER PROFILE & DROPDOWN */}
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 group"
                >
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{user.name}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white font-black border-2 border-white/10 group-hover:border-blue-500 transition-all">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-48 bg-[#1e293b] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm font-bold text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-slate-400 hover:text-white font-bold text-sm">SIGN IN</Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95">
                SIGN UP
              </Link>
            </div>
          )}
        </div>
      </div>

      {isDropdownOpen && <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;