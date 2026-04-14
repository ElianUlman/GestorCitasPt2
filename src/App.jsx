import { useState } from 'react'
import './App.css'
import Formulario from './Formulario.jsx'
import Lista from './lista'

function App() {

  const [citas, setCitas] = useState([])

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  }

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1 >
      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita} />
          <Lista citas={citas} setCitas={setCitas} />
        </div>
      </div>

    </>
  )
}

export default App
