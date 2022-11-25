import React from "react";
import "../styles/Restaurante.css";
import { BotonesSuperior} from "./Componentes_pag_Principal";
import { Link } from 'react-router-dom'


const LoginRestaurante = () =>{

    return(
        <React.Fragment>
            <BotonesSuperior/>
<div className="contenedor1">
<img src="https://cdn.pixabay.com/photo/2019/07/14/17/10/bar-4337608_960_720.jpg" />
<div className="Registro">
    <h1>Accede a tu cuenta</h1>
    <input type="email" placeholder=" Correo electronido" required id="nombre" maxlength="30"/>
    <input type="password" placeholder=" Contraseña" required id="nombre" maxlength="30"/>
    <button className="button1">Continuar</button>
    <p>¿Aún no te has registrado? <Link className="buttonEntrar" to="/Registro">Registrate aqui</Link></p>
</div>
</div>
</React.Fragment>)
}
export default LoginRestaurante