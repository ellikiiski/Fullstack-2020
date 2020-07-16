import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )  
}

const Button = ({ text, func }) => {
  return (
    <div>
      <button onClick={func}>{text}</button>
    </div>
  )
}

const StatLine = ({ text, value, more }) => {
  return (
    <>
        <td>{text}</td>
        <td>{value} {more} </td>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  if (total === 0) {
    return (
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatLine text='Good' value={good} />
        </tr>
        <tr>
          <StatLine text='Neutral' value={neutral} />
        </tr>
        <tr>
          <StatLine text='Bad' value={bad} />
        </tr>
        <tr>
          <StatLine text='All' value={total} />
        </tr>
        <tr>
          <StatLine text='Average' value={(good - bad) / total} />
        </tr>
        <tr>
          <StatLine text='Positive' value={((good / total) * 100)} more={'%'} />
        </tr>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text='Give feedback' />
      <Button text='GOOD' func={() => setGood(good + 1)} />
      <Button text='NEUTRAL' func={() => setNeutral(neutral + 1)} />
      <Button text='BAD' func={() => setBad(bad + 1)} />
      <Heading text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)