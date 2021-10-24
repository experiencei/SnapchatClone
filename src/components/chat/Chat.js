import { Avatar } from '@material-ui/core';
import { StopRounded } from '@material-ui/icons';
import React from 'react'
import "./Chat.css";
import ReactTimeago from "react-timeago";
import { useDispatch } from 'react-redux';
import { selectImage } from '../../features/appSlice';

function Chat({id, profilePic , username , timestamp , imageUrl , read}) {
    const dispatch = useDispatch();

    const open = () => {
        if(!read){
            dispatch(selectImage(imageUrl));
        }
    }

    return (
        <div onClick={open} className="chat">
            <Avatar className="chat__avatar" src={profilePic}/>

            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to view - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()}/></p>
            </div>

            {!read && <StopRounded className="chat__readIcon"/>}
        </div>
    )
}

export default Chat
