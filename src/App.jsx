import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  
  const [user, setUser] = useState(null)
  const [enviar, setEnviar] = useState(false)

  const handleFormSubmit = (datos) => {
    setUser(datos);
    setEnviar(true);
  };

  return (
    <div className='main'>
      <h1>¡Hola!</h1>
      <p>Por favor, introduce los siguientes datos:</p>
      <Form onSubmit={handleFormSubmit}/>
      {enviar && user && <Card user={user}/>}
    </div>
  )
}

export default App
