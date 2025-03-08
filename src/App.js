import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserManagement from './components/Usermanagement';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
       
        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
