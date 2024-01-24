import { useState } from 'react'
import './App.css'

const Title = ({ text }) => <h2>{text}</h2>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({ text, value }) => {

  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    console.log('good..', good)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log('neutral..', neutral)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    console.log('bad..', bad)
  }

  return (
    <div>
      <div>
        <Title text={'Give Feedback'} />
        <Button handleClick={handleGoodClick} text='Good' />
        <Button handleClick={handleNeutralClick} text='Neutral' />
        <Button handleClick={handleBadClick} text='Bad' />
      </div>
      <div>
        <Title text={'Statistics'} />
        <Statistics
          text={'Good'} value={good}
        />
        <Statistics
          text={'Neutral'} value={neutral}
        />
        <Statistics
          text={'Bad'} value={bad}
        />
      </div>
    </div>
  )
}

export default App
