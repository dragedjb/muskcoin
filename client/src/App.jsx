import React, { useContext } from 'react'; // Added useContext
import { Routes, Route, Navigate } from 'react-router-dom'; // Added Navigate
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider, UserContext } from './context/userContext'; // Import UserContext
import Dashboard from './pages/Dashboard';
import Withdraw from './pages/Withdraw';

// Set this to your Render URL when you go live!
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

// 1. Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, ready } = useContext(UserContext);

  if (!ready) return null;
  
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
        
        {/* 2. Wrap protected pages in ProtectedRoute */}
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path='/withdraw' 
          element={
            <ProtectedRoute>
              <Withdraw />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </UserContextProvider>
  );
}

export default App;