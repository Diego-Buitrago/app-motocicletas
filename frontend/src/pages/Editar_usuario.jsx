import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Editar_usuario = () => {

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [tipo, setTipo] = useState('')
    const [error, setError] = useState(null)
    const [exito, setExito] = useState(null)

    useEffect(async()=> {
        const res = await fetch(`/get_editar?` + new URLSearchParams({ id: localStorage.getItem('editar_usuario')}))
        const data = await res.json()
        setNombre(data[0].nombre)
        setEmail(data[0].email)
        setContrasena(data[0].contrasena)
        setTipo(data[0].tipo)
    }, [])
  
    const Editar = (e) => {
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
            fetch("/editar_usuario", {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: nombre,
                email: email,
                contrasena: contrasena,
                tipo: tipo,
                id: localStorage.getItem('editar_usuario')
            }),
            }).then((res) => {
                if (res.status === 200) {
                setError(null)
                setExito('Usuario editado')
            } else {setError('Error en el servidor contacta al administrador')}
            });
        }
    }

    return (
        <>
            <Menu/>
            <div className="div-crear">
            <h1 className="h1-crear-usuario">Editar Usuario</h1>
            
            <form id="form" onSubmit={(e)=>Editar(e)} className="form-group">
                <table  className="table table-Info mt-5" id="table-registrar">
                    <tr>
                        <td><label htmlFor="nombre">Nombre :</label></td>
                        <td><input
                            onChange={(e)=>{setNombre(e.target.value)}}
                            value={nombre}
                            type="text"
                            name="nombre"
                            id="precio"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                        <td><input
                            onChange={(e)=>{setEmail(e.target.value)}}
                            value={email}
                            type="email"
                            name="email"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="contrasena">Contraseña:</label></td>
                        <td><input
                            onChange={(e)=>{setContrasena(e.target.value)}}
                            value={contrasena}
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
                        <td align="center" colSpan="2"><input className="btn btn-success btn-block" type="submit" value="Editar usuario"/></td>
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

export default Editar_usuario
