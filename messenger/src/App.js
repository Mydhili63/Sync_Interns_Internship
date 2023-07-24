
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './pages/components/Navbar';
import Register from './pages/register';
import Login from './pages/login';
import AuthProvider from './context/auth';
import Profile from './pages/profile';
import Privateroute from './pages/components/Privateroute';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path = '/register' Component={Register}/>
            <Route exact path = '/login' Component={Login}/>
            <Route exact path = '/profile' element={<Profile></Profile>}/>
            <Route exact path = '/' element= {<Home></Home>}/>
      
          </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
