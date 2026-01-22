// pages/Register.jsx
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ name: '', email: '', password: '', giftCode: '' });

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', data);
            if (response.data.error) {
                toast.error(response.data.error);
            } else {
                if (response.data.giftApplied) {
                    toast.success('🎉 $3,000 Bonus Activated!', { icon: '💰' });
                }
                toast.success('Account Created!');
                navigate('/login');
            }
        } catch (error) { console.log(error); }
    };

    return (
        /* BACKGROUND CONTAINER */
        <div className="min-h-screen flex items-center justify-center p-6 bg-fixed bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#581c87]">
            {/* SVG OVERLAY (Adds depth) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-45c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm40 24c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-1 58c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0-82c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm14 47c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm-66 10c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm0-44c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm60 8c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>

            {/* FORM CARD (GLASSMORPHISM) */}
            <div className="z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden relative">
                
                {/* Visual Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>

                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">
                        Create Account
                    </h1>
                    <p className="text-slate-400 font-medium">Step into the future of betting</p>
                </div>

                <form onSubmit={registerUser} className="space-y-6">
                    <div className="relative">
                        <input 
                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                            type="text" placeholder="Full Name" required
                            onChange={(e) => setData({...data, name: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <input 
                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                            type="email" placeholder="Email Address" required
                            onChange={(e) => setData({...data, email: e.target.value})}
                        />
                    </div>

                    <div className="relative">
                        <input 
                            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none"
                            type="password" placeholder="Secure Password" required
                            onChange={(e) => setData({...data, password: e.target.value})}
                        />
                    </div>

                    {/* GIFT CODE SECTION */}
                    <div className="bg-blue-500/5 rounded-xl p-1 border border-blue-500/20">
                        <input 
                            className="w-full bg-transparent border-none rounded-lg px-3 py-3 text-cyan-400 font-bold placeholder-blue-900 text-center uppercase tracking-widest outline-none focus:ring-0"
                            type="text" placeholder="Enter Gift Code"
                            onChange={(e) => setData({...data, giftCode: e.target.value})}
                        />
                    </div>

                    <button type="submit" className="group relative w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all duration-300">
                        <span className="relative z-10">INITIALIZE ACCOUNT</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl blur-md"></div>
                    </button>
                </form>

                <p className="text-center text-slate-500 mt-8 text-sm">
                    Existing user? <a href="/login" className="text-blue-400 font-bold hover:text-cyan-300 transition-colors">Sign In here</a>
                </p>
            </div>
        </div>
    );
}

export default Register;