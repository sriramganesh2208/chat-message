import React from 'react'
import './Sidebarchat.css'
import {Button,Avatar} from '@material-ui/core'
import db from '../firebase'
import {Link} from 'react-router-dom'

function Sidebarchat({addnewchat,id,name,photo}) {

const handle=()=>{
  const roomname=prompt('Enter Your Name');
  const img= prompt('Add Your Profile')

  


  if(roomname){
      db.collection('rooms')
        .add({
          name:roomname,
          photo:img
        })

  }
}

  return !addnewchat? (
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat-col'>
       <div className='sidebarchat-photo'>
          <Avatar src={photo}/>
         </div>

        <div className='sidebarchat-text'>
          <h2>{name}</h2>
          
        </div>
    </div>
    </Link>
    ):(
      <div className='sidebarchat'>
        <Button onClick={handle}>Add New Chat</Button>
      </div>
    )
}

export default Sidebarchat

