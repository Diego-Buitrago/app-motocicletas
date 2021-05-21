import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Reparacion = () => {

    const [datos, setDatos] = useState([{}])

    useEffect(() => {
        const peticion = async() => {
            const res = await fetch('/vehiculos')
            const data = await res.json()
            setDatos(data)
        }
        peticion()   
    }, []);

    const Gestionar = (placa) => {
        window.localStorage.setItem('editar_vehiculo', (placa))
        window.location.href = '/gestionar_reparacion'
    }
    
    const Servicios = (placa) => {
        window.localStorage.setItem('seguimiento', (placa))
        window.location.href = '/seguimiento'
    }

    return (
        <>
            <Menu/>
            <div className="col" >
                <h1 className="h1-usuarios h1-gestionar">Gestionar Reparacion de vehiculo</h1>
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
                                        className="btn btn-success"
                                        onClick={() => {Servicios(item.nro_placa)}}
                                    >
                                        Servicios
                                    </button></td>
                                <td><button
                                        className="btn btn-info"
                                        onClick={() => {Gestionar(item.nro_placa)}}
                                    >
                                        Gestionar
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

export default Reparacion; 