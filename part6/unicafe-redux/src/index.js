import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counterReducer from './reducers/counterReducer'
import Statistics from './components/Statistics'

const counterStore = createStore(counterReducer)
const incCount = voteType => counterStore.dispatch({type: voteType.toUpperCase()})
const getCount = voteType => counterStore.getState()[voteType.toLowerCase()]


const App = () => {
  return (
    <div>
      <button onClick={ () => incCount('GOOD') }>good</button>
      <button onClick={ () => incCount('NEUTRAL') }>neutral</button>
      <button onClick={ () => incCount('BAD') }>bad</button>
      <button onClick={ () => incCount('RESET') }>reset stats</button>
      <Statistics
        good={getCount('GOOD')}
        neutral={getCount('NEUTRAL')}
        bad={getCount('BAD')}
      />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
counterStore.subscribe(renderApp)
