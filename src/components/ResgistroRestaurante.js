import React from "react";
import { Link } from 'react-router-dom'
import "../styles/Restaurante.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";


const Registro = () =>{

  return(
<React.Fragment>
   <BotonesSuperior/>
    <div className="contenedor2">
    <img src="https://img.europapress.es/fotoweb/fotonoticia_20180117114451_1200.jpg" />
    <div className="Registro2">
        <h1>Registra tu tienda</h1>
        <input type="text" placeholder="Pedro Picapiedra" required id="nombre" maxlength="10"/>
        <input type="text" placeholder="Domino's" required id="nombre" maxlength="10"/>
        <input type="email" placeholder="Ejemplo@gmail.com" required id="nombre" maxlength="30"/>
        <input type="password" placeholder="123456" required id="nombre" maxlength="30"/>
        <button className="button1">Regístrate ahora</button>
        <p>¿Ya tienes una cuenta? <Link className="buttonEntrar" to="/Iniciar">Inicia sesión aquí</Link></p>
    </div>
    </div>
    </React.Fragment>
  )
}

export default Registro