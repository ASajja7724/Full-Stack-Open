import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Title = (props) => {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const Display = (props) => {
  return (
    <p>{props.name} {props.value}</p>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  function calcAvg() {
    let total = good+neutral+bad
    if (total === 0){
      return 0
    } else {
     return (good*1+bad*-1)/(total)
    }
  }

  function calcPos() {
    let total = good+neutral+bad
    if (total === 0){
      return 0
    } else {
     return (good)/(total) * 100
    }
  }
  
  return (
    <div>
      <Title text="statistics feedback"/>
        <Display name="good" value={good}/>
        <Display name="neutral" value={neutral}/>
        <Display name="bad" value={bad}/>
        <Display name="all" value={good+neutral+bad}/>
        
        <Display name="average" value={calcAvg()}/>
        <Display name="positive" value={`${calcPos()} %`}/>
    </div>
    )
  } 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="give feedback"/>
        <Button text="good" onClick={() => setGood(good + 1)} />
        <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" onClick={() => setBad(bad + 1)} />

        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )

    
}


export default App