import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonAlert from './components/ButtonAlert'

function App() {
  const [texto, setTexto] = useState("")
  const handleTexto = (e) => {
    
    setTexto(e.target.value)
  }


  const [ count, setCount ] = useState(1)
  const handleClik = () => {
    setCount(count*2)//o SetCount ele começa no 0 porque tem que esperar a pagina recarregar
    console.log(count)
  }

  return (
    <>
      
      <ButtonAlert mensagem="Mensagem do componente"> Saiba mais </ButtonAlert>
      <div>
      <button onClick={handleClik }>clique aqui</button>
      {textoq}
      <input type="text" placeholder='digite aqui'  onChange={handleTexto}/>
      </div> 
      
    </>
  )
} 

export default App
//usar o count no html na div do botao faz a conta aparecer do lado dele 

//para usar variavies voce usa count e para iniciar e o setcount para pegar o valor

// <input type="text" placeholder='digite aqui' /> e para inserir coisas usando o teclado

// onchange e para quando se alterar algo na tag