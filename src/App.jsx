import { useState } from 'react'
import './App.css'
import Formulario from './Formulario.jsx'
import Lista from './lista'

function App() {

  const [citas, setCitas] = useState([])

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  }

 const borrarCita = (citaABorrar) => {
    const confirmar = window.confirm(
        `¿Estás seguro que deseas eliminar la cita de ${citaABorrar.mascota}?`
    );

    if (confirmar) {
        const nuevasCitas = citas.filter(cita => cita !== citaABorrar);
        setCitas(nuevasCitas);
    }
};

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1 >
      <div className="container">
        <div className="row">
          <Formulario agregarCita={agregarCita} />
          <Lista citas={citas} borrarCita={borrarCita} />
        </div>
      </div>

    </>
  )
}

export default App
