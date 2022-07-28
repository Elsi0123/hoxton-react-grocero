import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Totalset from './components/Total-set'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
       <Header />
       <Main />
       <Totalset />


       </div>
  )
}

export default App
