import React, {useState} from 'react'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)

    const LoginUsuario = async(e) => {
        e.preventDefault();
        if(email === '') {
            setError('Ingresa tu email')
        } else if (pass === '') {
            setError('ingresa tu contraseña')
        } else {
            const res = await fetch('/inicio_sesion?' + new URLSearchParams({ email: email, contrasena: pass }));
            const data = await res.json();

            if(data === 'usuario no encontrado verifica datos') {
                setError('datos invalidos')
            } else if(data.length !== 0) {
                window.localStorage.setItem('tipo', data[0].tipo)
                window.location.href = '/inicio'
            }
        }    
    }

    return (
        <div className="row mt-5">
            <div className="col-3"></div>
            <div className="col">
                <form onSubmit={(e)=>{LoginUsuario(e)}} className="form-group">
                    <input
                        onChange={(e)=>{setEmail(e.target.value)}}
                        type="email"
                        className="form-control mt-4"
                        placeholder="Indruduce el Email"
                    />
                    <input
                        onChange={(e)=>{setPass(e.target.value)}}
                        type="password"
                        className="form-control mt-4"
                        placeholder="Indruduce la Password"
                    />
                    <input
                        type="submit"
                        className="btn btn-dark btn-block mt-4"
                        value="iniciar sesion"
                    />
                </form>
                {
                    error != null ? (
                        <div id="error" className="alert alert-danger mt-2">{error}</div>
                    ):
                    (
                        <div></div>
                    )
                }
                <a className="a-login" href="recuperar_contrasena">He olvidado mi contraseña</a>
            </div>
            <div className="col-4"></div>
        </div>
    )
}

export default Login
