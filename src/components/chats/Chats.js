import { Avatar } from '@material-ui/core';
import { ChatBubble, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase';
import "./Chats.css";

function Chats() {
   const [posts , setPosts] = useState([]);

   useEffect(()=> {
       db.collection("posts").orderBy('timestamp' , "desc").onSnapshot( snapshot =>  setPosts(snapshot.docs.map( doc => ({
           id : doc.id,
           data : doc.data()
       }))) )
   } , [])

    return (
        <div className="chats">
        <div className="chats__header">
            <Avatar
                className="chats__avatar"
            />

            <div className="chats__search">
                <Search/>
                <input
                    placeholder="Friends"
                    type="text"
                />
            </div>
            <ChatBubble  
                className="chats__chatIcon"
            />
        </div>
              <div className="chats__posts">

              </div>
        </div>
    )
}

export default Chats
