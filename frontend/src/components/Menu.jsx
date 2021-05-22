import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {

    const Serrar_sesion = () => {
        window.localStorage.removeItem("editar_vehiculo", true);
        window.localStorage.removeItem("seguimiento", true);
        window.localStorage.removeItem("tipo_seguimiento", true);
        window.localStorage.removeItem("tipo", true);
        window.location.href = '/'
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link h5" to="/inicio">Inicio</Link>
                    </li>
                    <li className="nav-item col-sm-5">
                        <Link
                            className="nav-link h5"
                            to={
                                localStorage.getItem("tipo") === '1' ? 'usuarios' : localStorage.getItem("tipo") === '2' ? 'vehiculos' : 'reparacion'
                            }
                        >{
                            localStorage.getItem("tipo") === '1' ? 'Gestionar_usuarios' : localStorage.getItem("tipo") === '2' ? 'Gestionar_vehiculos' : 'Gestionar_reparacion'
                        }</Link>
                    </li>
                    <li className="nav-item col-sm-5">
                        <Link
                            className="nav-link h5"
                            to={
                                localStorage.getItem("tipo") === '1' ? 'crear_usuario' : localStorage.getItem("tipo") === '2' ? 'registrar_vehiculo' : 'buscar_vehiculos_r'
                            }
                        >{
                            localStorage.getItem("tipo") === '1' ? 'Crear_usuario' : localStorage.getItem("tipo") === '2' ? 'Registrar_vehiculo' : 'Buscar_vehiculos'
                        }</Link>
                    </li>
                    <li className="nav-item col-sm-5">
                        <Link
                            className="nav-link h5"
                            to={
                                localStorage.getItem("tipo") === '1' ? '' : localStorage.getItem("tipo") === '2' ? 'buscar_vehiculos' : ''
                            }
                        >{
                            localStorage.getItem("tipo") === '1' ? '' : localStorage.getItem("tipo") === '2' ? 'Buscar_Vehiculos' : ''
                        }</Link>
                    </li>
                    <li className="nav-item col-sm-5">
                        <button onClick={Serrar_sesion} className="btn btn-dark mt-2 flexbox">Cerrar sesion</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
