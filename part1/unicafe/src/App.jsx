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

const StatisticsDisplay = ({ good, neutral, bad, total, commentsPositive }) => {
  const averageCommets = (good - bad) / total || 0

  return (
    <div>
      <Statistics text={'Good'} value={good} />
      <Statistics text={'Neutral'} value={neutral} />
      <Statistics text={'Bad'} value={bad} />
      <Statistics text={'all'} value={total} />
      <Statistics text={'Average'} value={averageCommets} />
      <Statistics text={'Positive'} value={commentsPositive + '%'} />
    </div>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const handleGoodClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
    console.log('good..', good)
    const valueTotal = total + 1
    console.log('valueTotal', valueTotal)
    setTotal(valueTotal)
  }
  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    console.log('neutral..', neutral)
    setTotal(total + 1)
  }
  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    console.log('bad..', bad)
    setTotal(total + 1)
  }

  const commentsPositive = (good / total) * 100 || 0


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
        <StatisticsDisplay
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          commentsPositive={commentsPositive}
        />
      </div>
    </div>
  )
}

export default App
