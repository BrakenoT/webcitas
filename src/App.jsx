import React, { Fragment, useState , useEffect} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import Footer from './components/Footer';


function App() {

  //citas en local storage

  let citasIniciales = JSON.parse(localStorage.getItem("citas"))
  if(!citasIniciales){ //si no hay citas
    citasIniciales = [] //crea un arreglo vacio
  }

  //agregar citas

  const [citashechas , guardarcitas] = useState(citasIniciales)

  //useEffect para relaizar operaciones dependiendo del state

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem("citas", JSON.stringify(citashechas))
    }else{
      localStorage.setItem("citas", JSON.stringify([]))
    }
  },[citashechas, citasIniciales]) //usar siempre [] para no crear bucle

  //funcion que tome las citas y agregue la nueva

  const crearCita = cita =>{
    guardarcitas([
      ...citashechas,
      cita
    ])
  }
  //funcion que elimina una cita pot id

  const eliminarCita = id =>{
    const nuevasCitas = citashechas.filter(cita =>cita.id !== id)
    guardarcitas(nuevasCitas)
  }

  //mensaje condicional

  const titulo = citashechas.length === 0 
  ?
  "No hay citas"
  :
  "Administra tus citas"
  

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className='row'>
          <div className="one-half column">
            <Formulario 
            crearCita = {crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citashechas.map(cita =>(
            <Cita 
            key = {cita.id}  //si estamos iterando o mapeando necesitamos una key
            cita = {cita}
            eliminarCita = {eliminarCita}
            />))}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
