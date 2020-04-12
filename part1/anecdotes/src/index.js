import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const RandomBetween = (min, max) => {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  const randomQuote = (selectedCount) => {
    setSelected(RandomBetween(0, selectedCount - 1))
  }

  const voteQuote = (selected) =>{
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }
  
  const mostVotedAnecdote = (anecdotes, points) => {
    const maxPointsQuoteIndex = points.indexOf(Math.max(...points));
    return anecdotes[maxPointsQuoteIndex]
  }

  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <div>{props.anecdotes[selected]}</div>
        <div>has {points[selected]} votes</div>
        <Button onClick={ () => {randomQuote(props.anecdotes.length)} } text="next anecdote" ></Button>
        <Button onClick={ () => {voteQuote(selected)} } text="vote"></Button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <div>{mostVotedAnecdote(props.anecdotes, points)}</div>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)