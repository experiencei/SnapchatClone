import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectSelectedImage } from '../../features/appSlice';
import "./ChatView.css";


function ChatView() {
   const selectedImage = useSelector(selectSelectedImage);
   const history = useHistory();
   
   useEffect(() => {
       if(!selectedImage) {
           exit();
       }
      
   }, [input])

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
        </div>
    )
}

export default ChatView
