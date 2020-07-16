import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, func }) => {
  return (
    <div>
      <button onClick={func}>{text}</button>
    </div>
  )
}

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <h4>
        {anecdote}
      </h4>
      <p>
        This anecdote has {votes} votes
      </p>
    </div>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  const [mostVoted, setMostVoted] = useState(0)
  
  const random = () => {
    const next =Math.floor(Math.random() * anecdotes.length)
    return (
      setSelected(next)
    )
  }

  const addVote = () => {
    const array = [...votes]
    array[selected] += 1
    if (array[selected] > array[mostVoted]) {
      setMostVoted(selected)
    }
    return (
      setVotes(array)
    )
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button text='Next anecdote' func={random} />
      <Button text='Vote this' func={addVote} />
      <h1>Most voted anecdote</h1>
      <Anecdote anecdote={anecdotes[mostVoted]} votes={votes[mostVoted]} />
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