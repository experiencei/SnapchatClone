import React from 'react';
import { appSlice } from './features/appSlice';
import './App.css';
import { BrowserRouter as Router , Switch , Link , Route } from 'react-router-dom';
import WebcamCapture from './components/webcamcapture/WebcamCapture';
import Preview from './components/preview/Preview';
import Chats from './components/chats/Chats';

function App() {
  return (
    <div className="app">
      
      <Router>
          <div className="app__body">
         <Switch>
       <Route  exact path="/">
           <WebcamCapture />
       </Route>
       <Route  path="/chats">
           <Chats />
       </Route>
       <Route   path="/preview">
           <Preview />
       </Route>
       <Route   path="/chats/view">
           <ChatView />
       </Route>
       </Switch>
       </div>
   
   </Router> 
  </div>
  );
}

export default App;
