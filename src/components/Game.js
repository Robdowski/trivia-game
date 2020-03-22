import React, { useState, useEffect } from 'react'
import parse from 'html-react-parser'

const Game = (props) => {
    const [page, setPage] = useState(0)
    const [question, setQuestion] = useState()
    const [playing, setPlaying] = useState(false)
    const [score, setScore] = useState(0)
    
    useEffect(() => {
        setQuestion(props.allQuestions[page])
    }, [props.allQuestions])

    const playGame = () => {
        setPlaying(true)
        setScore(0)
        setPage(0)
        while(playing === true){
            
        } 
    }

    return (
        <div>
            {!playing && (
                <button onClick={e => playGame()}>Start Game!</button>
            )}
            {playing && question && (<div>
                <h1>{question.category}</h1>
                <h3>{parse(question.question)}</h3>
                {[...question.incorrect_answers, question.correct_answer].map(answer =>(
                        <button key={answer}>{parse(answer.toUpperCase())}</button>
                    ))}
            </div>)}
        </div>
    )
}

export default Game
