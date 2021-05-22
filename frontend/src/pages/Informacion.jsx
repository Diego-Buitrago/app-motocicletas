import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Reparacion = () => {

    const [datos, setDatos] = useState([{}])

    useEffect(() => {
        const peticion = async() => {
            const res = await fetch('/info_tipo_seguimiento?' + new URLSearchParams({ tipo: localStorage.getItem('tipo_seguimiento')}))
            const data = await res.json()
            setDatos(data)
        }
        peticion()   
    }, []);

    if(datos === 'vehiculo no encontrado') {
        return (
            <>
                <Menu/>
                <h1>Vehiculo sin servicios registrados</h1>
            </>
        );
    } else {
        return (
            <>
                <Menu/>
                <div className="col" >
                    <h1 className="h1-seguimiento">Seguimiento</h1>
                    <table className="table table-info mt-5" id="table-usuarios">
                    <tbody>
                        <tr>
                            <th>Numero de placa</th>
                            <th>Marca</th>
                            <th>Linea</th>
                            <th>Fecha de reparacion</th>
                            <th>Tipo de seguimiento</th>
                            <th>Observaciones</th>
                        </tr>
                        {
                            datos.map((item, index) => 
                                <tr key={index}>
                                    <td>{item.placa_moto}</td>
                                    <td>{item.marca}</td>
                                    <td>{item.linea}</td>
                                    <td>{item.fecha_reparacion ? item.fecha_reparacion.slice(0, -14) : ''}</td>
                                    <td>{item.tipo_seguimiento}</td>
                                    <td>{item.observaciones}</td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
            </>
        )
    }
};

export default Reparacion; 