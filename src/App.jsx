import { useReducer } from 'react'
import landing from './assets/landing.jpg'
import './App.css'

function App() {
  const [showLanding, toggleShowLanding] = useReducer((state) => !state, false)

  const onClick = () => {
    toggleShowLanding()
  }

  return (
    <>
      {
        showLanding ?
          <img src={landing} onClick={onClick}/>
          :
          <button onClick={onClick}>Сгенерировать лучший лендинг</button>
      }
    </>
  )
}

export default App
