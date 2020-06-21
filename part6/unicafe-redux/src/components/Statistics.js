import React from 'react'
import Statistic from './Statistic'

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

  export default Statistics
  