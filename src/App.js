import React,{useState} from 'react';
import './App.css';
import Home from "./component/Home"
import Profile from "./component/Profile"

function App() {
  const[name, setName]=useState("Jitendra")

  const handleChange=(changeName)=>{
    setName(changeName)
  }
  return (
    <div className="App">
      <Profile name={name}/>
      <Home handleChange={(changeName)=>{handleChange(changeName)}}/>
    </div>
  );
}

export default App;
