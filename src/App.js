import React from 'react';
import{ Routes,Route  } from "react-router-dom";
import './App.css'
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import About from './pages/About';

const App = () => {
  return(
 
  
  <div className='App'>
   <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route path="/add" element={<AddEdit/>}/>
     <Route path="/View/:id" element={<View/>}/>
     <Route path="/about" element={<About/>}/>
   </Routes>

  </div>

  );
};

export default App;
