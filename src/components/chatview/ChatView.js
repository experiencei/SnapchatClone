import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectSelectedImage } from '../../features/appSlice';
import "./ChatView.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer"


function ChatView() {
   const selectedImage = useSelector(selectSelectedImage);
   const history = useHistory();
   
   useEffect(() => {
       if(!selectedImage) {
           exit();
       }
      
   }, [selectedImage])

   const exit = () => {
            history.replace("/chats")
   }

    return (
        <div className="chatView">
            <img 
                src={selectedImage}
                onClick={exit}
                alt="image3"
            />

            <CountdownCircleTimer
               isPlaying
               duration={10}
               strokeWidth={6}
               size={50}
               colors={[
                   ["#004777" , 0.33],
                   ["#F7B801" , 0.33],
                   ["#A30000" , 0.33],
               ]}
            >
                   {({remainingTime}) => {
                      if(remainingTime === 0){
                          exit();
                      }
                   }}
            </CountdownCircleTimer>
        </div>
    )
}

export default ChatView
