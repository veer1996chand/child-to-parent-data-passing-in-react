import React,{useState} from "react"

const Home=(props)=>{
    const[name] =useState('chandraveer')
    return<div> 
        Home Component :- <button onClick={()=>{props.handleChange(name)}}>click</button>
    </div>
}

export default Home