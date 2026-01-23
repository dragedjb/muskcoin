import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider, UserContext } from './context/userContext';
import Dashboard from './pages/Dashboard';
import Withdraw from './pages/Withdraw';

const ProtectedRoute = ({ children }) => {
  const { user, ready } = useContext(UserContext);

  if (!ready) return <div className="min-h-screen bg-[#020617] flex items-center justify-center text-white">Loading...</div>;
  
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
        {/* <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        <Route path='/withdraw' element={<ProtectedRoute><Withdraw /></ProtectedRoute>} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;