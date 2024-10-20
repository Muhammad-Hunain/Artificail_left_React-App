import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PredictionForm from './components/prediction_form'
import Card from './components/card'
import DonutChart from './components/chart'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Card /> */}
      <PredictionForm />
      {/* <DonutChart/> */}

    </>
  )
}

export default App
