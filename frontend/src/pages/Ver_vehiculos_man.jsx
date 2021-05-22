import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Ver_vehiculos_man = () => {

    const [datos, setDatos] = useState([{}])

    useEffect(() => {
        const peticion = async() => {
            const res = await fetch('/vehiculos_man')
            const data = await res.json()
            setDatos(data)
        }
        peticion()   
    }, []);

    return (
        <>
            <Menu/>
            <div className="col" >
                <h1 className="h1-vehiculos_man">Vehiculos con mantenimiento</h1>
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
                                <td>{item.fecha_ven_seguro ? item.fecha_ven_seguro.slice(0, -14) : ''}</td>
                                <td>{item.fecha_ven_tecnomecanica ? item.fecha_ven_tecnomecanica.slice(0, -14) : ''}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        </>
    )
};

export default Ver_vehiculos_man; 