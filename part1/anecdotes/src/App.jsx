import { useState } from 'react'
import './App.css'

const Anecdotes = ({anecdotes}) => <h2>{anecdotes}</h2>

const Votes = ({votes, text}) => <p>{text}: {votes}</p> 

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const MostVotedAnecdote = ({mostVotedAnecdote}) => <h2>{mostVotedAnecdote}</h2>

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [select, setSelect] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  console.log('votes..', votes)

  const handlNextAnecdotes = () => {
    const numOfAnecdotes = anecdotes.length ;    
    const randomAnecdote = Math.floor(Math.random() * numOfAnecdotes);
    console.log('click....', randomAnecdote)
    setSelect(randomAnecdote)
  }

  const handleVote = () => {
    const votesCopy = [... votes]
    votesCopy[select] += 1
    setVotes(votesCopy)
  }

  const findMostVotedIndex = () => {
    return votes.reduce((maxIndex, value, index, arr) => value > arr[maxIndex] ? index : maxIndex, 0)
  }

  return (
    <div>
      <Anecdotes anecdotes={anecdotes[select]} />
      <Votes text={'Has voted'} votes={votes[select]}/>
      <Button handleClick={handleVote} text={'Vote'} />
      <Button handleClick={handlNextAnecdotes} text={'Next anecdotes'} />
      <MostVotedAnecdote mostVotedAnecdote={anecdotes[findMostVotedIndex()]} />
    </div>
  )
}

export default App