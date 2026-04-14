function Cita({cita}) {

    console.log(cita)

    if(!cita){
        return
    }
    
    return (

        <div className ="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p><button className ="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );
}

export default Cita