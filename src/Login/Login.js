import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core"
import {auth} from '../firebase'
import {provider} from '../firebase'


function Login({setuser}) {

    const signin=()=>{
        auth
              .signInWithPopup(provider)
             .then(res=>{sessionStorage.setItem('user', JSON.stringify(res.user))
              setuser(res.user)
             })
         
            .catch(err=> alert(err.message))
    }

  return (
    <div className='login'>
        <h1>Sign in To Chat</h1>
        <Button onClick={signin}>Sign In With Google</Button>
    </div>
  )
}

export default Login