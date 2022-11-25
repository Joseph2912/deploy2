import React from "react";
import "../styles/Usuario.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";
import { Link } from 'react-router-dom'




const LoginUsuario = () =>{

    return(
        <React.Fragment>
            <BotonesSuperior/>
            <div className="contenedor2">
            <img src="https://cdn.pixabay.com/photo/2017/08/31/09/01/woman-2699801_960_720.jpg"/>
            <div className="Registro2">
            <h1>Iniciar sesión</h1>
                <input type="text" placeholder=" Nombre" required id="nombre" maxlength="10"/>
                <input type="password" placeholder=" Contraseña" required id="nombre" maxlength="10"/>
                <button className="button1" >Continuar</button>
                <p>¿No tienes una cuenta? <Link className="buttonEntrar" to="/RegistroUsuario">Registrate aqui</Link></p>
            </div>
            </div>
</React.Fragment>)
}
export default LoginUsuario