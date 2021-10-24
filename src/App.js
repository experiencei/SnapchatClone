import React from 'react';
import { appSlice } from './features/appSlice';
import './App.css';
import WebcamCapture from './components/webcamcapture/WebcamCapture';

function App() {
  return (
    <div className="app">
       <h2>Let build snapchat</h2>
       <WebcamCapture />
    </div>
  );
}

export default App;
