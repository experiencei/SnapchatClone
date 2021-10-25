import React from 'react';
import { appSlice } from './features/appSlice';
import './App.css';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import WebcamCapture from './components/webcamcapture/WebcamCapture';
import Preview from './components/preview/Preview';
import Chats from './components/chats/Chats';
import ChatView from './components/chatview/ChatView';
import { selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className="app">
      
      <Router>
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
         <Switch>
         <Route path="/chats/view">
           <ChatView />
       </Route>
       <Route  path="/chats">
           <Chats />
       </Route>
       <Route path="/preview">
           <Preview />
       </Route>
       <Route  exact path="/">
           <WebcamCapture />
       </Route>
       </Switch>
       </div>
      ) }
          
   
   </Router> 
  </div>
  );
}

export default App;
