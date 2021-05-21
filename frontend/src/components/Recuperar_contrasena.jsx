import React, {useState} from 'react'

const Recuperar = () => {
    
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState(null)

    const RecuperarContrasena = async(e) => {
        e.preventDefault();

        if(email) {
            const res = await fetch('/contrasena?' + new URLSearchParams({ email: email}));
            const data = await res.json();

            if(data.length !== 0) {
                fetch("/enviar_mail", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  to: email,
                  subject: "recuperar contraseña",
                  contrasena: data[0].contrasena
                })
              }).then(res => {
                  setMensaje('Revisa tu correo')
                  //window.location.href = '/'
              })
            }
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col">
                <form onSubmit={(e)=>{RecuperarContrasena(e)}} className="form-group">
                    <input
                        onChange={(e)=>{setEmail(e.target.value)}}
                        type="email"
                        className="form-control mt-4"
                        placeholder="Indruduce el Email"
                    />
                    <input
                        type="submit"
                        className="btn btn-dark btn-block mt-4"
                        value="Recuperar contraseña"
                    />
                </form>
                {
                    mensaje != null ? (
                        <div id="error" className="alert alert-success mt-2">{mensaje}</div>
                    ):
                    (
                        <div></div>
                    )
                }
                <a className="a-recuperar" href="/">Login</a>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Recuperar
