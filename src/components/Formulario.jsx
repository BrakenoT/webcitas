import React, { Fragment , useState} from 'react';
import shortid from 'shortid';
import PropTypes  from 'prop-types';


const Formulario = ({ crearCita }) => {

    //Crear satte de citas

    const [cita , actualizarCita] = useState({
        mascota: "",
        propietario : "",
        fecha : "",
        hora : "",
        sintomas : ""
    })

    //state para el error

    const [error, actualizarError] = useState(false)

    //FUNCION ACTUALIZARSTATE  cada que el usuario escriba en cita

    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        }) //esto tomara en cuenta cada letra escrita
    }

    //extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita

    //cuando el user usa eel boton de agregar cita
    const submitCita = e =>{
        
        e.preventDefault();
        //validar
        if(mascota.trim() ==="" || propietario.trim() ==="" || hora.trim() ==="" || fecha.trim() ==="" || sintomas.trim() ===""){
           actualizarError(true)
            return
        }

        actualizarError(false) //por si acaso tiene  el error previo

        //asignar un ID
        cita.id = shortid()        
        
        //crear cita
        crearCita(cita);

        //reiniciar el form
        actualizarCita({
            mascota: "",
            propietario : "",
            fecha : "",
            hora : "",
            sintomas : ""
        })
    }
    return (
        <Fragment>
            <h2>Crear cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> :null}

            <form
                onSubmit={submitCita}
                data-netlify = "true"
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota" 
                    className='u-full-width'
                    placeholder='Nombre Mascota'
                    onChange={actualizarState}
                    value={mascota}
                />
            
                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario" 
                    className='u-full-width'
                    placeholder='Nombre Dueño de la Mascota'
                    onChange={actualizarState}
                    value = {propietario}
                />
            
                <label>Fecha de la cita</label>
                <input 
                    type="date"
                    name="fecha" 
                    className='u-full-width'
                    onChange={actualizarState}
                    value = {fecha}
                />
            
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora" 
                    className='u-full-width'
                    onChange={actualizarState}
                    value = {hora}
                />
            
                <label>Sintomas o enfermedad</label>
                <textarea 
                    name="sintomas" 
                    className='u-full-width' 
                    onChange={actualizarState}
                    value = {sintomas}
                ></textarea>
                <button
                    type="submit"
                    className='u-full-width button-primary'    
                >Agregar cita</button>
         
            </form>
        </Fragment>
    )
}   

Formulario.protoTypes = {
    crearCita: PropTypes.func.isRequired
}
export default Formulario