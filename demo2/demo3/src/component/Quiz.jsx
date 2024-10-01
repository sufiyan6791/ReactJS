import React, { useState } from 'react'
import Quizquesshow from './Quizquesshow'
import"./Quiz.css"

export default function Quiz() {
    const questions = [
        {
         question: "what is react js",
         options:[
            "react framwork",
            "react library",
            "testing tools",
         ] ,
         answer:  "react library",
        },
        {
         question:"full form of html",
         options:[
            "hyper markup language",
            "hyper text language",
            "hyper language",
            
         ]  , 
         answer:"hyper markup language"
        },
        {
            question:"national animal of india",
            options:[
                "tiger",
                "lion",
                "cheetah",
            ],
            answer:"tiger"
        }   
    ]


    const [currentindex,setcurrentindex]=useState(0);
    const [currentanswer,setcurrentanswer]=useState(null)
    const[score,setscore]=useState(0);


    const nextquestion=()=>{
        setcurrentindex(currentindex+1)
        setcurrentanswer(null)
    }

 const handleclick=(option)=>{
    setcurrentanswer(option)
    if(option===questions[currentindex].answer){
        setscore(score+1)
    }
 }
 return (
   <>
   {currentindex<questions.length?(
  
      
<>
<Quizquesshow
question={questions[currentindex].question}
option={questions[currentindex].options}
handleclick={handleclick}
currentanswer={currentanswer}

/>

<button onClick={nextquestion}
disabled={currentanswer===null}
className={currentanswer===null?"button-disable":"button"}

>nextquestion</button>
</>
   ):(
    <div>your score is {score}</div>
   )}
</>

  )
}
