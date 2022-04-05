import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthContext } from './hooks/useAuthContext'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import './App.css'

function App() {
  const { authIsReady, user } = useAuthContext()
  
  useEffect(() => {
    document.title = "Money"
  }, []);

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
