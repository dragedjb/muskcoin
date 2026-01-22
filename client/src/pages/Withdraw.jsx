import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // Optional: Use react-hot-toast for better UI

const Withdraw = () => {
  // 1. STATE FOR FORM FIELDS
  const [formData, setFormData] = useState({
    amount: '',
    network: 'BEP20 (Binance Smart Chain)',
    reference: ''
  });

  // 2. VALIDATION & SUBMIT HANDLER
  const handleConfirm = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!formData.amount || !formData.reference) {
      toast.error('Please fill in all fields to proceed!');
      return;
    }

    // If filled, show the processing message
    toast.success('Request received! Processing takes up to 24 hours.', {
      duration: 5000,
      icon: '⏳',
    });
    
    // Optional: Reset form or redirect
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020617] text-white flex items-center justify-center p-6 overflow-hidden">
      
      {/* BACKGROUND SVG (Matches Register Page) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
         </svg>
      </div>

      {/* DEPOSIT CARD */}
      <div className="relative z-10 w-full max-w-xl bg-white/5 backdrop-blur-2xl border-[6px] border-blue-500/30 rounded-[3rem] p-8 md:p-12 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-[900] italic tracking-tighter text-yellow-400 uppercase">
            Fund Account
          </h2>
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-2 italic">Official MuskCoin Terminal</p>
        </div>

        <form onSubmit={handleConfirm} className="space-y-6">
          
          {/* AMOUNT INPUT */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-2">Deposit Amount (USD)</label>
            <input 
              type="number" 
              value={formData.amount}
              onChange={(e) => setFormData({...formData, amount: e.target.value})}
              placeholder="Min $50.00"
              className="w-full bg-[#0f172a] border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:border-blue-500 transition-all outline-none"
            />
          </div>

          {/* WALLET TYPE */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-2">Select Network</label>
            <select 
              value={formData.network}
              onChange={(e) => setFormData({...formData, network: e.target.value})}
              className="w-full bg-[#0f172a] border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-bold outline-none"
            >
              <option>BEP20 (Binance Smart Chain)</option>
              <option>ERC20 (Ethereum)</option>
              <option>TRC20 (Tron)</option>
            </select>
          </div>

          {/* REFERENCE */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 ml-2">Transaction Reference / Hash</label>
            <input 
              type="text" 
              value={formData.reference}
              onChange={(e) => setFormData({...formData, reference: e.target.value})}
              placeholder="Paste TxID here"
              className="w-full bg-[#0f172a] border-2 border-white/10 rounded-2xl px-6 py-4 text-white font-bold focus:border-blue-500 transition-all outline-none"
            />
          </div>

          {/* DEPOSIT ADDRESS BOX */}
          <div className="bg-blue-500/10 border-2 border-dashed border-blue-500/40 rounded-3xl p-6 text-center">
            <p className="text-[10px] font-black text-blue-400 uppercase mb-3 tracking-widest">Company Deposit Address</p>
            <div className="flex items-center justify-between bg-black/40 px-4 py-3 rounded-xl border border-white/5">
                <code className="text-blue-300 font-mono text-sm break-all">bc1q44jzvwx7arejzwvqnqtzxgxl5t5jucn66ajp8u</code>
                <button 
                  type="button"
                  onClick={() => {navigator.clipboard.writeText('bc1q44jzvwx7arejzwvqnqtzxgxl5t5jucn66ajp8u'); toast.success('Address Copied!')}}
                  className="ml-4 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-all"
                >
                  📋
                </button>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-yellow-400 hover:text-black text-white font-[900] uppercase tracking-[0.2em] py-5 rounded-2xl transition-all shadow-lg active:scale-95"
          >
            Confirm Deposit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;