import React, {useState, useEffect} from 'react'
import Menu from '../components/Menu'

const Inicio = () => {

    const [man_preventivo, setMan_preventivo] = useState('')
    const [man_general, setMan_general] = useState('')
    const [rep_general, setRep_general] = useState('')
    const [rep_parcial, setRep_parcial] = useState('')
    const [man_preventivo_2, setMan_preventivo_2] = useState('')
    const [man_generl_2, setMan_general_2] = useState('')

    useEffect(async()=> {
        const res_man_preventivo = await fetch(`/tipo_seguimiento?` + new URLSearchParams({ tipo: "Mantenimiento Preventivo"}))
        const data_man_preventivo = await res_man_preventivo.json()
        data_man_preventivo === 'veiculos no encontrados' ? setMan_preventivo('0') : setMan_preventivo(data_man_preventivo.length)

        const res_man_general = await fetch(`/tipo_seguimiento?` + new URLSearchParams({ tipo: "Mantenimiento General"}))
        const data_man_general = await res_man_general.json()
        data_man_general === 'veiculos no encontrados' ? setMan_general('0') : setMan_general(data_man_general.length)

        const res_rep_preventivo = await fetch(`/tipo_seguimiento?` + new URLSearchParams({ tipo: "Reparada General"}))
        const data_rep_preventivo = await res_rep_preventivo.json()
        data_rep_preventivo === 'veiculos no encontrados' ? setRep_general('0') : setRep_general(data_rep_preventivo.length)

        const res_rep_parcial = await fetch(`/tipo_seguimiento?` + new URLSearchParams({ tipo: "Reparada Parcial"}))
        const data_rep_parcial = await res_rep_parcial.json()
        data_rep_parcial === 'veiculos no encontrados' ? setRep_parcial('0') : setRep_parcial(data_rep_parcial.length)

        const res_man_preventivo_2 = await fetch(`/tipo_seguimiento?` + new URLSearchParams({ tipo: "Mantenimiento Preventivo 2 Tiempos"}))
        const data_man_preventivo_2 = await res_man_preventivo_2.json()
        data_man_preventivo_2 === 'veiculos no encontrados' ? setMan_preventivo_2('0') : setMan_preventivo_2(data_man_preventivo_2.length)

        const res_man_general_2 = await fetch(`/tipo_seguimiento?` + new URLSearchParams({ tipo: "Mantenimiento General 2 Tiempos"}))
        const data_man_general_2 = await res_man_general_2.json()
        data_man_general_2 === 'veiculos no encontrados' ? setMan_general_2('0') : setMan_general_2(data_man_general_2.length)
    }, [])

    const Info = (tipo) => {
        window.localStorage.setItem('tipo_seguimiento', (tipo))
        window.location.href = '/informacion'
    }

    return (
        <>
            <Menu/>
            <div class="col-12 col-lg-12">
                <div class="row contenedor">
                    <button onClick={() => {Info('Mantenimiento Preventivo')}} class="col-12 col-lg-3 bg-info">
                        <div className="div-img_1">©</div>
                        <h1 className="h1-inicio">{man_preventivo}</h1>
                        <h5>Mantenimiento Preventivo</h5>
                        <p>Pulsa para mas informacion</p>
                    </button>
                    
                    <button onClick={() => {Info('Mantenimiento General')}} class="col-12 col-lg-3 bg-secondary">
                        <div className="div-img_2">©</div>
                        <h1 className="h1-inicio">{man_general}</h1>
                        <h5>Mantenimiento General</h5>
                        <p>Pulsa para mas informacion</p>
                    </button>

                    <button onClick={() => {Info('Reparada General')}} class="col-12 col-lg-3 bg-success">
                        <div className="div-img_3">©</div>
                        <h1 className="h1-inicio">{rep_general}</h1>
                        <h5>Reparada General</h5>
                        <p>Pulsa para mas informacion</p>
                    </button>
                    
                    <button onClick={() => {Info('Reparada Parcial')}} class="col-12 col-lg-3 bg-secondary">
                        <div className="div-img_4">©</div>
                        <h1 className="h1-inicio">{rep_parcial}</h1>
                        <h5>Reparada Parcial</h5>
                        <p>Pulsa para mas informacion</p>
                    </button>

                    <button onClick={() => {Info('Mantenimiento Preventivo 2 Tiempos')}} class="col-12 col-lg-3 bg-success">
                        <div className="div-img_5">©</div>
                        <h1 className="h1-inicio">{man_preventivo_2}</h1>
                        <h5>Mantenimiento Preventivo 2 Tiempos</h5>
                        <p>Pulsa para mas informacion</p>
                    </button>
                    
                    <button onClick={() => {Info('Mantenimiento General 2 Tiempos')}} class="col-12 col-lg-3 bg-info">
                        <div className="div-img_6">©</div>
                        <h1 className="h1-inicio">{man_generl_2}</h1>
                        <h5>Mantenimiento General 2 Tiempos</h5>
                        <p>Pulsa para mas informacion</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Inicio