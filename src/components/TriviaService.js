import React, { useState, useEffect } from 'react'
import axios from 'axios'


import Game from './Game'

const TriviaService = () => {
    const [template, setTemplate] = useState('?amount=5&category=9&type=multiple')
    const [allQuestions, setAllQuestions] = useState([])

    const handleAxiosCall = template => {
        const easy = axios.get(`https://opentdb.com/api.php${template}&difficulty=easy`)
        const medium = axios.get(`https://opentdb.com/api.php${template}&difficulty=medium`)
        const hard = axios.get(`https://opentdb.com/api.php${template}&difficulty=hard`)
        
        axios.all([easy, medium, hard]).then(axios.spread((...responses) => {
            const responseEasy = responses[0].data.results
            const responseMedium = responses[1].data.results
            const responseHard = responses[2].data.results
    
            setAllQuestions([...responseEasy, ...responseMedium,...responseHard])
          })).catch(errors => {
            console.log(errors)
          })

        
    }

    useEffect(() => {
        handleAxiosCall(template)
    }, [])

    return (
        <div>
            <Game allQuestions={allQuestions} handleAxiosCall={handleAxiosCall} />
        </div>
    )
}

export default TriviaService
