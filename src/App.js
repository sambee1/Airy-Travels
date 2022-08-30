import React from 'react';
import './App.css';
import Home from './Components/Home/home';
import './Components/Home/style.css'
import Login from './Components/Login';
import SignUp from './Components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [signedIn, setSignedIn] = React.useState(false)

  
  return (
    <div className="App">
      <header className="App-header">
        
      

        <BrowserRouter>
    

      <Routes>
          <Route path = '/' element = {< Home />} />
          <Route path = '/signup' element = {< SignUp />} />
    
    
      </Routes>
      </BrowserRouter>
      
            
        
      </header>
    </div>
  );
}

export default App;
