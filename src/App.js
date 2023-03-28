import './App.css';
import Sidebar from './sidebar/Sidebar';
import Chat from './chat/Chat'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import React,{useState} from 'react'
import Login from './Login/Login'


function App() {

  const [user,setUser] =useState(sessionStorage.getItem('user') || '');

  return (
    
         <div className="App">

          {user ? (
              <div className='app-body'>
              <Router>
                 <Sidebar setuser={setUser} user={user}/>
                 <Routes>
                    <Route path='/rooms/:roomid' element={<Chat user={user}/>}></Route>
                    </Routes>
                </Router>
              </div>
          ):(
            <Login setuser={setUser}/>
          )}
            
          </div>
    
  );
}

export default App;

/*<BrowserRouter>
            <Sidebar/>
            <Routes>
              <Route path='/rooms/:roomId' element={<Chat/>}></Route>
              
            </Routes>
          
          </BrowserRouter>*/