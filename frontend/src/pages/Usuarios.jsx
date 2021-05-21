import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Usuarios = () => {

    const [datos, setDatos] = useState([{}])

    useEffect(() => {
        const peticion = async() => {
            const res = await fetch('/usuarios')
            const data = await res.json()
            setDatos(data)
        }
        peticion()   
    }, []);

    const editar = (id) => {
        window.localStorage.setItem('editar_usuario', (id))
        window.location.href = '/editar_usuario'
    }

    const eliminar = (id) => {
        const nuevoArray = datos.filter(item => item.id !== id)
        setDatos(nuevoArray)

        fetch('/eliminar_usuario' , {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           id: id
           })
       })
    }

    return (
        <>
            <Menu/>
            <div className="col" >
                <h1 className="h1-usuarios">Gestionar Usuarios</h1>
                <table className="table table-info mt-5" id="table-usuarios">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Tipo usuario</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                    {
                        datos.map((item, index) => 
                            <tr key={index}>
                                <td>{item.nombre}</td>
                                <td>{item.email}</td>
                                <td>{item.tipo === "1" ? 'Administrador' : item.tipo === "2" ? 'Gestion Vehiculos' : 'Reparacion vehiculos'}</td>
                                <td><button
                                        className="btn btn-info"
                                        onClick={() => {editar(item.id)}}
                                    >
                                        Editar
                                    </button></td>
                                <td><button
                                        className="btn btn-danger"
                                        onClick={() => {eliminar(item.id)}}
                                    >
                                        Borrar
                                    </button></td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        </>
    )
};

export default Usuarios; 