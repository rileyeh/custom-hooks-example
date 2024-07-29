import React, { useState } from 'react'
import Pokemon from './components/Pokemon'
import StarWars from './components/StarWars'

import './App.css'

const App = () => {
  const [display, setDisplay] = useState(0)

  return (
    <div className='app'>
      <header className='header flex-horizon'>
        <h1>Custom Hooks Example</h1>
        <nav className='nav flex-horizon'>
          <button onClick={() => setDisplay(0)}>Pokemon</button>
          <button onClick={() => setDisplay(1)}>Star Wars</button>
        </nav>
      </header>
      <div className='main'>
        {display === 0 ? (
          <Pokemon />
        ) : display === 1 ? (
          <StarWars />
        ) : (
          <p>Choose a component to display</p>
        )}
      </div>
    </div>
  )
}

export default App
