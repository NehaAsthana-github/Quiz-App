import { useState } from "react";
import Navbar from "./components/Navbar.js"

import QuizScreen from "./components/QuizScreen.js";

import JoinScreen from "./components/JoinScreen.js";



function App(){
const[IsQuizStarted,setIsQuizStarted]= useState(false);
return(
<>
<Navbar/>
<div className="quiz-container">
  {
  IsQuizStarted ?(
    <QuizScreen retry={()=>setIsQuizStarted(false)}/>
  ):(
    <JoinScreen start={()=>setIsQuizStarted(true)}/>
  )
}
</div>

</>
);
}
export default App;