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

      <Title text="statistics feedback"/>
        <Display name="good" value={good}/>
        <Display name="neutral" value={neutral}/>
        <Display name="bad" value={bad}/>

    </div>
  )
}

export default App