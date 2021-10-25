import { Avatar } from '@material-ui/core';
import { ChatBubble, RadioButtonUnchecked, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser } from '../../features/appSlice';
import Chat from '../chat/Chat';
import { db , auth} from '../firebase/firebase';
import "./Chats.css";

function Chats() {
   const [posts , setPosts] = useState([]);
   const user = useSelector(selectUser);
   const dispatch = useDispatch();
   const history = useHistory();


   useEffect(()=> {
       db.collection("posts").orderBy('timestamp' , "desc").onSnapshot( snapshot =>  setPosts(snapshot.docs.map( doc => ({
           id : doc.id,
           data : doc.data()
       }))) )
   } , [])


   const takeSnap = () => {
     history.push("/")
   }
    return (
        <div className="chats">
        <div className="chats__header">
            <Avatar
                onClick={() => auth.signOut()}
                 src={user.profilePic}
                className="chats__avatar"
            />

            <div className="chats__search">
                <Search className="chats__searchIcon"/>
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
                 {posts.map( ({ id , data: { profilePic , username , timestamp , imageUrl , read}}) => (
                         <Chat
                            key={id}
                            id={id}
                            username={username}
                            profilePic={profilePic}
                            timestamp={timestamp}
                            imageUrl={imageUrl}
                            read={read}
                         />
                 )
                 )}
              </div>
              <RadioButtonUnchecked
                  className="chats__takePicIcon"
                  onClick={takeSnap}
                  fontSize="large"
            />
        </div>

       
    )
}

export default Chats
