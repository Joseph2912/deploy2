import React from "react";
import "../styles/Usuario.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";
import { Link } from 'react-router-dom'


const RegistroUsuario = () =>{

    return(
        <React.Fragment>
            <BotonesSuperior/>
            <div className="contenedor2">
            <img src="https://cdn.pixabay.com/photo/2020/01/08/03/54/market-4749215_960_720.jpg"/>
            <div className="Registro2">
                <h1>Regístrate</h1>
                <input type="text" placeholder=" Nombre" required id="nombre" maxlength="10"/>
                <input type="password" placeholder=" Contraseña" required id="nombre" maxlength="10"/>
                <input type="email" placeholder=" Correo electronido" required id="nombre" maxlength="30"/>
                <button className="button1" >Crear cuenta</button>
                <p>¿Ya tienes una cuenta? <Link className="buttonEntrar" to="/EntrarUsuario">Incia sesion aqui</Link></p>
            </div>
            </div>
</React.Fragment>)
}
export default RegistroUsuario

