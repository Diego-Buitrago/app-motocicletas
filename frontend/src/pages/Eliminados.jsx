import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Eliminados = () => {

    const [datos, setDatos] = useState([{}])

    useEffect(() => {
        const peticion = async() => {
            const res = await fetch('/eliminados')
            const data = await res.json()
            setDatos(data)
        }
        peticion()   
    }, []);

    return (
        <>
            <Menu/>
            <div className="col" >
                <h1 className="h1-eliminados">Vehiculos Eliminados</h1>
                <table className="table table-info mt-5" id="table-usuarios">
                <tbody>
                    <tr>
                        <th>Numero de placa</th>
                        <th>Marca</th>
                        <th>Linea</th>
                        <th>Modelo</th>
                    </tr>
                    {
                        datos.map((item, index) => 
                            <tr key={index}>
                                <td>{item.nro_placa}</td>
                                <td>{item.marca}</td>
                                <td>{item.linea}</td>
                                <td>{item.modelo}</td>
                            </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
        </>
    )
};

export default Eliminados