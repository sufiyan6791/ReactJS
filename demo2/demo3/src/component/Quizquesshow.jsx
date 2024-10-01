import React from 'react'

export default function Quizquesshow({question,option,handleclick,currentanswer}) {
  return (
      <div>
            <h2>{question}</h2>
            <ul>
                {option.map((option, index) => (
                    <li key={index}
                    onClick={()=>handleclick(option)}
                    className={currentanswer===option?"selected":""}
                    >{option}</li>
                ))}
            </ul>
        </div>
    )
}
