import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/appSlice';
import { auth, provider } from '../firebase/firebase';
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

   const signIn = () => {
       auth.signInWithPopup(provider).then( result => {
           dispatch(login({
               username : result.user.displayName,
               profilePic : result.user.photoURL,
               id : result.user.uid,
           }))
       }).catch(err => {
           alert(err.message);
       })

   }


    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg"
                    alt="logo"
                />

                <Button  variant="outlined"  onClick={signIn}> Sign in</Button>
            </div>
        </div>
    )
}

export default Login
