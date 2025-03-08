import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { FormProvider } from "./components/FormContext";

import Login from './components/Login';
import UserManagement from './components/Usermanagement';
import Dashboard from './components/dashboard';
import Surgery from './components/Surgery';
import EditDischarge from './components/EditDischarge';
function App() {
  return (
    <div className="App">
      <FormProvider>
        
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usermanagement" element={<UserManagement />} />
       <Route path="/surgery" element={<Surgery/>} />
       <Route path="/editdischarge" element={<EditDischarge/>} />
        
      </Routes>
    </Router>
    </FormProvider>
    
      
    </div>
  );
}

export default App;
