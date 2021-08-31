import React from 'react';
import "./Login.css"
import {auth , provider} from "./firebase"

function Login() {

    const signIn = () => {
     auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className="login">
          <h1>I am a Login page</h1>

          <div className="login_logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQPAW-YpkfKwYoe4grIHqNGn7fgZDTNn5QyUDArj0Ge5tRv0nmF52RY_2GZNmisiG6vo&usqp=CAU" alt="" />
          </div>

          <button onClick = {signIn}>Sign In</button>
        </div>
    )
}

export default Login
