import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAlert from './components/ButtonAlert'

function App() {

  return (
    <>
      
      <ButtonAlert mensagem="Mensagem do componente"> Saiba mais </ButtonAlert>
    </>
  )
} 

export default App
