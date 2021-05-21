import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Editar_usuario = () => {

    const [nro_placa, setPlaca] = useState('')
    const [marca, setMarca] = useState('')
    const [linea, setLinea] = useState('')
    const [modelo, setModelo] = useState('')
    const [fecha_ven_seguro, setVenSeguro] = useState('')
    const [fecha_ven_tecnomecanica, setVenTecnomecanica] = useState('')
    const [error, setError] = useState(null)
    const [exito, setExito] = useState(null)

    useEffect(async()=> {
        const res = await fetch(`/get_editar_vehiculo?` + new URLSearchParams({ placa: localStorage.getItem('editar_vehiculo')}))
        const data = await res.json()
        setPlaca(data[0].nro_placa)
        setMarca(data[0].marca)
        setLinea(data[0].linea)
        setModelo(data[0].modelo)
        setVenSeguro(data[0].fecha_ven_seguro)
        setVenTecnomecanica(data[0].fecha_ven_tecnomecanica)
        console.log(data)
    }, [])
  
    const Editar = (e) => {
        e.preventDefault()

        if (nro_placa === '') {
            setError('Ingresa la placa')
        } else if (marca === '') {
            setError('Ingresa la marca')
        } else if (linea === '') {
            setError('Ingresa una linea')
        } else if (modelo === '') {
            setError('Ingresa un modelo')
        } else if (fecha_ven_seguro === '') {
            setError('Ingresa la fecha en la que vence el seguro')
        } else {
            fetch("/editar_vehiculo", {
                method: "PUT",
                headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nro_placa: nro_placa,
                marca: marca,
                linea: linea,
                modelo: modelo,
                fecha_ven_seguro: fecha_ven_seguro,
                fecha_ven_tecnomecanica: fecha_ven_tecnomecanica
            }),
            }).then((res) => {
                if (res.status === 200) {
                setError(null)
                setExito('Vehiculo editado')
            } else {setError('Error en el servidor contacta al administrador')}
            });
        }
    }

    return (
        <>
            <Menu/>
            <div className="div-crear">
            <h1 className="h1-crear-usuario">Editar vehiculo</h1>
            
            <form id="form" onSubmit={(e)=>Editar(e)} className="form-group">
                <table  className="table table-Info mt-5" id="table-registrar">
                    <tr>
                        <td><label htmlFor="placa">Numero placa:</label></td>
                        <td><input
                            onChange={(e)=>{setPlaca(e.target.value)}}
                            value={nro_placa}
                            type="text"
                            name="placa"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="marca">Marca:</label></td>
                        <td>
                        <select value={marca} onChange={(e)=>setMarca(e.target.value)}>
                                <option value="AKT">AKT</option>
                                <option value="Honda">Honda</option>
                                <option value="Yamaha">Yamaha</option>
                                <option value="Bajaj">Bajaj</option>
                                <option value="Suzuki">Suzuki</option>
                                <option value="Hero">Hero</option>
                                <option value="TVS">TVS</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="linea">Linea:</label></td>
                        <td>
                        {
                                marca === 'AKT' ? (
                                    <select value={linea} onChange={(e)=>setLinea(e.target.value)}>
                                        <option value="NKD 125">NKD 125</option>
                                        <option value="SPECIAL 110 X">SPECIAL 110 X</option>
                                        <option value="FLEX 125">FLEX 125</option>
                                        <option value="CR4 125">CR4 125</option>
                                        <option value="TTR 125">TTR 125</option>
                                        <option value="Dynamic R 125">Dynamic R 125</option>
                                        <option value="TTR 200">TTR 200</option>
                                        <option value="Dynamic Pro CBS">Dynamic Pro CBS</option>
                                    </select>
                
                                ) : marca === 'Honda' ? (
                                    <select value={linea} onChange={(e)=>setLinea(e.target.value)}>
                                        <option value="WAVE 110S">WAVE 110S</option>
                                        <option value="LH150">LH150</option>
                                        <option value="XR190L">XR190L</option>
                                        <option value="CB125F TWISTER. CB250 TWISTER">CB125F TWISTER</option>
                                        <option value="BIZ 125">BIZ 125</option>
                                        <option value="CG150 TITAN">CG150 TITAN</option>
                                        <option value="XR250 TORNADO">XR250 TORNADO</option>
                                        <option value="CB250 TWISTER">CB250 TWISTER</option>
                                    </select>
                                ) : marca === 'Yamaha' ? (
                                    <select value={linea} onChange={(e)=>setLinea(e.target.value)}>
                                        <option value="NUEVA NMAX">NUEVA NMAX</option>
                                        <option value="NMAX CONNECTED">NMAX CONNECTED</option>
                                        <option value="Xmax 300">Xmax 300</option>
                                        <option value="CRYPTON FI">CRYPTON FI</option>
                                        <option value="BWS X FI">BWS X FI</option>
                                        <option value="NMAX">NMAX</option>
                                    </select>
                                ) : marca === 'Bajaj' ? (
                                    <select value={linea} onChange={(e)=>setLinea(e.target.value)}>
                                        <option value="BOXER">BOXER</option>
                                        <option value="Discover">Discover</option>
                                        <option value="Pulsar">Pulsar</option>
                                        <option value="Dominar">Dominar</option>
                                        <option value="Torito">Torito</option>
                                    </select>
                                ) : marca === 'Suzuki' ? (
                                    <select value={linea} onChange={(e)=>setLinea(e.target.value)}>
                                        <option value="Address">Address</option>
                                        <option value="Burgman 125">Burgman 125</option>
                                        <option value="Burgman 200">Burgman 200</option>
                                        <option value="GIXXER 150 ABS">GIXXER 150 ABS</option>
                                        <option value="GSX-S750A">GSX-S750A</option>
                                    </select>
                                ) : marca === 'Hero' ? (
                                    <select value={linea} onChange={(e)=>setLinea(e.target.value)}>
                                        <option value="ECO 100">ECO 100</option>
                                        <option value="ECO DELUXE">ECO DELUXE</option>
                                        <option value="ECO DELUXE CLÁSICA">ECO DELUXE CLÁSICA</option>
                                        <option value="SPLENDOR 110">SPLENDOR 110</option>
                                        <option value="IGNITOR 125">IGNITOR 125</option>
                                        <option value="THRILLER PRO">THRILLER PRO</option>
                                        <option value="DASH 125">DASH 125</option>
                                        <option value="HUNK 190">HUNK 190</option>
                                        <option value="HUNK 160">HUNK 160</option>
                                    </select>
                                ): marca === 'TVS' ? (
                                    <select value={linea} onChange={(e)=>setLinea(e.target.value)}>
                                        <option value="Apache RR 310">Apache RR 310</option>
                                        <option value="Apache RTR 200 4V">Apache RTR 200 4V</option>
                                        <option value="Apache RTR 180">Apache RTR 180</option>
                                        <option value="Apache 160 4V Premium">Apache 160 4V Premium</option>
                                        <option value="Apache RTR 160">Apache RTR 160</option>
                                        <option value="Sport 100">Sport 100</option>
                                    </select>
                                ) : (
                                    <select><option></option></select>
                                )
                            }
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="modelo">Modelo:</label></td>
                        <td>
                        <select value={modelo} onChange={(e)=>setModelo(e.target.value)}>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option> 
                                <option value="2014">2014</option> 
                                <option value="2015">2015</option> 
                                <option value="2016">2016</option> 
                                <option value="2017">2017</option> 
                                <option value="2018">2018</option> 
                                <option value="2019">2019</option> 
                                <option value="2020">2020</option> 
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>    
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="seguro">Fecha vencimiento seguro:</label></td>
                        <td><input
                            onChange={(e)=>{setVenSeguro(e.target.value)}}
                            value={fecha_ven_seguro}
                            type="date"
                            name="seguro"
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="tecnomecanica">Fecha vencimiento tecnomecanica:</label></td>
                        <td><input
                            onChange={(e)=>{setVenTecnomecanica(e.target.value)}}
                            value={fecha_ven_tecnomecanica}
                            type="date"
                            name="tecnomecanica"
                        /></td>
                    </tr>
                    <tr>
                        <td align="center" colSpan="2"><input className="btn btn-success btn-block" type="submit" value="Editar"/></td>
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
