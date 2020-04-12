import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({text, value}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = all ? good - bad / all : 0.0
  const percentPositive = all ? (100.0 * good / all) + "%" : ""
  
  if(all === 0){
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />  
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={percentPositive} />
        </tbody>
      </table>
    </div>
  )
}

const Button = ({onClick, statistic}) => {
  return (
    <button onClick={onClick}>{statistic}</button>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button onClick={() => setGood(good + 1)} statistic="good"></Button>
        <Button onClick={() => setNeutral(neutral + 1)} statistic="neutral"></Button>
        <Button onClick={() => setBad(bad + 1)} statistic="bad"></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)