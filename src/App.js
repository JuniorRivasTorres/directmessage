import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Imessage from './Imessage'
import './App.css';
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {

      } else {

      }
    })
  }, [])

  return <div className="app">{user ? 
  <Imessage /> : <Login />}</div>;
       
     }
     


export default App;
