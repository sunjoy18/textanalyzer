import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { useState } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled!","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#c8e7d8';
      showAlert("Light mode enabled!","success");
    }
  }

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>    
      <Router basename='/textanalyzer'>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            
          <div className="container my-5">
            <br />
            <Alert alert = {alert}/>
            <Routes>   
              <Route path="/about" element={<About mode={mode} /> } />
              <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;

