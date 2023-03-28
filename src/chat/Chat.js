import React, {useState,useEffect} from 'react'
import './Chat.css'
import { useParams } from 'react-router-dom'
import db from '../firebase'


function Chat({user}) {

  //useParams
  const {roomid} = useParams()

  //useState
  const [input,setInput] =useState('')
  const[message,sendMessage] =useState([])
  const [roomname,setRoomname]=useState('')
  
  useEffect(()=>{
        if(roomid){
          db.collection('rooms')
          .doc(roomid)
            .onSnapshot((snapshot)=>{
              setRoomname(snapshot.data().name)
              
            })

//get the data from firebase  to display            
db.collection('rooms')
.doc(roomid)
.collection('messages')
.onSnapshot((snapshot)=>{
    sendMessage(snapshot.docs.map(doc=> doc.data()))
})
        }
  },[roomid])

 

  const handle=(e)=>{
    setInput(e.target.value)
  }

  const send =()=>{
 
    sendMessage([...message,input])
   
    // here display to firebase 
    
    db.collection('rooms')
    .doc(roomid)
    .collection('messages')
    .add({
        message:input,
        name:user.displayName
    })
    
    setInput('')
  }


  return (
    <div className='chat'>
     
      <div className='chat-header'>
          <h1>{roomname}</h1>
      </div>

      <div className='chat-body'> 
        {message.map((mes)=>{
          return(
            <div>
                <div className={`chat-message ${message.name === user.displayName &&'chat-user'}`}>
                    <p className={message.name === user.displayName ? "chat-message":"guest-chat"}>
                   <span className='name'>{mes.name}</span>
                    {mes.message}
                    </p>
                 
                </div>

            </div>
          )

          
        })}
         
      </div>

      <div className='chat-footer'>
      
      <input value={input} onChange={handle} 
       placeholder='Enter Message' className='chat-search'/>
     
      <button onClick={send}
       className='button'>Send</button>
      
      </div>
      
    </div>
  )
}

export default Chat

// ${message.name === user.displayname}