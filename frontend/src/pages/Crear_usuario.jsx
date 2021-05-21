import React, {useState} from 'react'
import Menu from '../components/Menu'

const Crear = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [tipo, setTipo] = useState('')
    const [error, setError] = useState(null)
    const [exito, setExito] = useState(null)
  
    const insertar = (e) => {
        e.preventDefault()

        if (nombre === '') {
            setError('Ingresa un nombre')
        } else if (email === '') {
            setError('Ingresa un email')
        } else if (contrasena === '') {
            setError('Ingresa una contraseña')
        } else if (tipo === '') {
            setError('Selecciona el tipo de usuario')
        } else {

            fetch("/registrar_usuario", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: nombre,
                email: email,
                contrasena: contrasena,
                tipo: tipo
            }),
            }).then((res) => {
                if (res.status === 200) {
                setError(null)
                setExito('Registro exitoso')
            } else {setError('Error en el servidor contacta al administrador')}
            });
        }
    }

    return (
        <>
            <Menu/>
            <div className="div-crear">
            <h1 className="h1-crear-usuario">Crear Usuario</h1>
            
            <form id="form" onSubmit={(e)=>insertar(e)} className="form-group">
                <table  className="table table-Info mt-5" id="table-registrar">
                    <tr>
                        <td><label htmlFor="nombre">Nombre :</label></td>
                        <td><input
                            onChange={(e)=>{setNombre(e.target.value)}}
                            type="text"
                            name="nombre"
                            id="precio"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                        <td><input
                            onChange={(e)=>{setEmail(e.target.value)}}
                            type="email"
                            name="email"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="contrasena">Contraseña:</label></td>
                        <td><input
                            onChange={(e)=>{setContrasena(e.target.value)}}
                            type="password"
                            name="contrasena"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="tipo">Tipo de usuario:</label></td>
                        <td>
                            <select onChange={(e)=>{setTipo(e.target.value)}}>
                                <option>Escoge tu tipo de usuario</option>
                                <option value="1">Administrador</option>
                                <option value="2">Gestion vehiculos</option>
                                <option value="3">Reparacion vehiculos</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="2"><input className="btn btn-success btn-block" type="submit" value="Registrar usuario"/></td>
                    </tr>
                </table>
                {
                    error != null ? (
                        <div id="error" className="alert alert-danger mt-2">{error}</div>
                    ):
                    (
                        <div></div>
                    )
                }
                {
                    exito != null ? (
                        <div id="error" className="alert alert-success mt-2">{exito}</div>
                    ):
                    (
                        <div></div>
                    )
                }
                </form>
            </div>
        </>
    )
}

export default Crear
