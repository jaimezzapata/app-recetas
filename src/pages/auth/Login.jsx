import { useState } from 'react'
import './Login.css'
const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')

    console.log(usuario)
    function signIn() {
        if (usuario == 'Jaime') {
            alert('Inicio de sesión correcto')
        }
    }
    return (
        <form className="form" action="">
            <section>
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input onChange={(e) => { setUsuario(e.target.value) }} id="usuario" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input onChange={(e) => { setContrasena(e.target.value) }} id="password" type="text" />
                </div>
                <button onClick={signIn} className="button" type="button">Iniciar Sesión</button>
            </section>
        </form>
    )
}

export default Login