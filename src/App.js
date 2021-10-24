import React from 'react';
import { appSlice } from './features/appSlice';
import './App.css';
import { BrowserRouter as Router , Switch , Link , Route } from 'react-router-dom';
import WebcamCapture from './components/webcamcapture/WebcamCapture';

function App() {
  return (
    <div className="app">
      
      <Router>
          <div className="app__body">
         <Switch>
       <Route  exact path="/">
           <WebcamCapture />
       </Route>
       </Switch>
       </div>
   
   </Router> 
  </div>
  );
}

export default App;
