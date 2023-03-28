import React, { useEffect,useState} from 'react'
import {Avatar} from '@material-ui/core'
import './Sidebar.css'
import Sidebarchat from './Sidebarchat'
import db from '../firebase'

function Sidebar({setuser,user}) {

  const[rooms,setRooms] =useState([]);

  // getting data from firestore database
  useEffect(()=>{
      db.collection('rooms')
        .onSnapshot(snapshot=>{
            setRooms(snapshot.docs.map((doc)=>({
                id:doc.id,
                data: doc.data()
            })))
        })
  },[])
  
  return (
    <div className='sidebar'>
       
        <div className='sidebar-header'>
            <Avatar src={user.photoURL}/>
            <h1>Chat</h1>
        </div>
       
        <div className='sidebar-search'>
            <input placeholder='Search the Chat' className='search'/>
        </div>
        
        <div className='sidebar-chat'>
          
           <Sidebarchat addnewchat/>
            
            {rooms.map((room)=>{
              return(
                <Sidebarchat
                id={room.id}
                key={room.id}
                name={room.data.name}
                photo={room.data.photo}
                />
              )
            })}
           

        </div>

    </div>
  )
}
//{
  //if (type === null) {
    //return;
  //}
export default Sidebar