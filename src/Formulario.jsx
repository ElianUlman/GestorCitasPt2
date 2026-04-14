import { useState } from 'react'
import './Formulario.css'

function Formulario({ agregarCita }) {

    const [cita, setCita] = useState({
        mascota: "",
        propietario: "",
        fecha: "",
        hora: "",
        sintomas: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const { mascota, propietario, fecha, hora, sintomas } = cita;
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' ||
            hora.trim() === '' || sintomas.trim() === '') {
            alert("Por favor, completa todos los campos");
            return;
        }

        agregarCita(cita)

        setCita({
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        })
    }

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={cita.mascota} // <--- Importante añadir esto
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={handleChange}
                    value={cita.propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.hora}
                />

                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={cita.sintomas}
                ></textarea>

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )
}

export default Formulario