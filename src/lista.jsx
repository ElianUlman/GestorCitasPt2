import Cita from "./cita"

function Lista({citas}) {
    
    const citasProcesadas = []

    for (let i = 0; i < 3; i++) {

        citasProcesadas.push(<Cita key = {i} cita = {citas[i]}/>)
    }

    return (
        <div className ="one-half column">
            <h2>Administra tus citas</h2>
            
            {citasProcesadas}
        </div>
    );
}

export default Lista