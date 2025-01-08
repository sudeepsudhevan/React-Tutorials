import React from 'react'

export default function StartScreen({numQuestions, dispatch}) {
    function handleStart() {
        dispatch({type: "start"})
    }

  return (
    <div className="start">
        <h2>Welcome to the React Quiz</h2>
        <h3>{numQuestions} questions to test your React mastery</h3>
        <button onClick={handleStart} className='btn btn-ui'>Let's Start</button>
    </div>
  )
}
