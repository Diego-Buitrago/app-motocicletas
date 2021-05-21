import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Vehiculos = () => {

    const [datos, setDatos] = useState([{}])

    useEffect(() => {
        const peticion = async() => {
            const res = await fetch('/vehiculos')
            const data = await res.json()
            setDatos(data)
        }
        peticion()   
    }, []);

    const editar = (placa) => {
        window.localStorage.setItem('editar_vehiculo', (placa))
        window.location.href = '/editar_vehiculo'
    }

    const eliminar = (placa) => {
        const nuevoArray = datos.filter(item => item.nro_placa !== placa)
        setDatos(nuevoArray)

        fetch('/eliminar_vehiculo' , {
            method: 'DELETE',
            headers: {
               'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           placa: placa
           })
       })
    }

    return (
        <>
            <Menu/>
            <div className="col" >
                <h1 className="h1-usuarios">Gestionar Vehiculos</h1>
                <table className="table table-info mt-5" id="table-usuarios">
                <tbody>
                    <tr>
                        <th>Numero de placa</th>
                        <th>Marca</th>
                        <th>Linea</th>
                        <th>Modelo</th>
                        <th>Fecha ven seguro</th>
                        <th>Fecha ven tecnomecanica</th>
                    </tr>
                    {
                        datos.map((item, index) => 
                            <tr key={index}>
                                <td>{item.nro_placa}</td>
                                <td>{item.marca}</td>
                                <td>{item.linea}</td>
                                <td>{item.modelo}</td>
                                <td>{item.fecha_ven_seguro}</td>
                                <td>{item.fecha_ven_tecnomecanica}</td>
                                <td><button
                                        className="btn btn-info"
                                        onClick={() => {editar(item.nro_placa)}}
                                    >
                                        Editar
                                    </button></td>
                                <td><button
                                        className="btn btn-danger"
                                        onClick={() => {eliminar(item.nro_placa)}}
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

export default Vehiculos; 