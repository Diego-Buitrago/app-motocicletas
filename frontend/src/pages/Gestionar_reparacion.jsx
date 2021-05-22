import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'
const moment = require("moment");

const Gestionar = () => {

    const [nro_placa, setPlaca] = useState('')
    const [marca, setMarca] = useState('')
    const [linea, setLinea] = useState('')
    const [fecha, setFecha] = useState('')
    const [tipo, setTipo] = useState('')
    const [observaciones, setObservaciones] = useState('')
    const [error, setError] = useState(null)
    const [exito, setExito] = useState(null)

    useEffect(async()=> {
        setFecha(moment().format('YYYY-MM-DD'))

        const res = await fetch(`/get_editar_vehiculo?` + new URLSearchParams({ placa: localStorage.getItem('editar_vehiculo')}))
        const data = await res.json()
        setPlaca(data[0].nro_placa)
        setMarca(data[0].marca)
        setLinea(data[0].linea)
    }, [])
  
    const Registrar = (e) => {
        e.preventDefault()

        if (tipo === '') {
            setError('Ingresa el tipo de seguimiento')
        } else {
            fetch("/registrar_seguimiento", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                placa_moto: nro_placa,
                marca: marca,
                linea: linea,
                fecha_reparacion: fecha,
                tipo_seguimiento: tipo,
                observaciones: observaciones
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
            <h1 className="h1-crear-usuario h1-reparacion">Servicio tecnico y reparaciones de vehiculos</h1>
            
            <form id="form" onSubmit={(e)=>Registrar(e)} className="form-group">
                <table  className="table table-Info mt-5" id="table-registrar">
                    <tr>
                        <td><label htmlFor="placa">Numero placa:</label></td>
                        <td><input
                            disabled
                            value={nro_placa}
                            type="text"
                            name="placa"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="marca">Marca:</label></td>
                        <td><input
                            disabled
                            value={marca}
                            type="text"
                            name="marca"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="linea">Linea:</label></td>
                        <td><input
                            disabled
                            value={linea}
                            type="text"
                            name="linea"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="fecha">Fecha de reparacion:</label></td>
                        <td><input
                            disabled
                            value={fecha}
                            type="text"
                            name="fecha"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="tipo">Tipo de seguimiento:</label></td>
                        <td>
                            <select onChange={(e)=>{setTipo(e.target.value)}}>
                                <option value="">----------------</option>
                                <option value="Mantenimiento Preventivo">Mantenimiento Preventivo</option>
                                <option value="Mantenimiento General">Mantenimiento General</option>
                                <option value="Reparada General">Reparada General</option>
                                <option value="Reparada Parcial">Reparada Parcial</option>
                                <option value="Mantenimiento Preventivo 2 Tiempos">Mantenimiento Preventivo 2 Tiempos</option>
                                <option value="Mantenimiento General 2 Tiempos">Mantenimiento General 2 Tiempos</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="observaciones">Observaciones:</label></td>
                        <td><textarea onChange={(e)=>{setObservaciones(e.target.value)}}></textarea></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="2"><input className="btn btn-success btn-block" type="submit" value="Registrar seguimiento"/></td>
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

export default Gestionar