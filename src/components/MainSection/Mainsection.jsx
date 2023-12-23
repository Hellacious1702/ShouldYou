import React, { useState } from 'react'
import './Mainsection.css'

import MainImage from './Assets/Images/Image.png'

let rand = "";

function fetchRandom(){
    rand = Boolean(Math.round(Math.random()));
    console.log(rand);
    return rand;
}

const Mainsection = () => {

    const [result,setResult] = useState();
    const [userInput,setUserInput] = useState();
    const [display,setDisplay] = useState("notDisplayed")
    

  return (
    <div className='Mainsection-Main'>
      <div className="Mainsection-Main-Wrapper">
        <div className="Mainsection-image">
          <img src={MainImage}/>
        </div>
        <div className="Mainsection-input">
          <input type="text" id='input' onChange={(event) => {{(event.target.value)==="" ? setUserInput(undefined): setUserInput(event.target.value)};setDisplay("notDisplayed")}} placeholder="What's on Your Mind? (eg. - get a car , buy a house , go to movie)" required/>
          <button onClick={() => {fetchRandom();setDisplay("Displayed");setResult(rand);console.log(userInput)}}>Should I Do It???</button>
        </div>
        <div className="Main-Result-Display">
          {display==="notDisplayed" ? "" : <h1 id={result===true ? "h1Yes" : "h1No"}>{userInput===undefined ? <div> {result===true ? "Yes" : "No"} </div> : <div> {result===true ? "Yes , You Should "+(userInput) : "No , dont "+(userInput)} </div>}</h1>}
        </div>
      </div>
    </div>
  )
}

export default Mainsection