import OtpVerify from "./components/OtpVerify";
import Register from "./components/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Chat from "./components/Chat";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/chat' element={<OtpVerify />}/>
        <Route path='/Register' element={<Register />}/>      
        <Route path='/' element={<Chat/>}/>      
      </Routes>   
      <ToastContainer />  
    </Router>
  );
}

export default App;
