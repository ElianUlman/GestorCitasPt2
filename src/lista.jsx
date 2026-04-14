import Cita from "./cita"

function Lista({citas, borrarCita}) {
    
    const citasProcesadas = []

    for (let i = 0; i < 3; i++) {

        citasProcesadas.push(<Cita key = {i} cita = {citas[i]} borrarCita = {borrarCita}/>)
    }

    return (
        <div className ="one-half column">
            <h2>Administra tus citas</h2>
            
            {citasProcesadas}
        </div>
    );
}

export default Lista