import { useState, useEffect } from 'react'
import './Login.css'
let urlUsuarios = 'http://localhost:3000/usuarios'

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [usuarios, setUsuarios] = useState([])

    function getUsuarios() {
        fetch(urlUsuarios)
            .then(response => response.json())
            .then(json => setUsuarios(json))
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getUsuarios()
    }, [])
    console.log(usuarios)
    function signIn() {
        if (usuario == 'Jaime' && contrasena == '123456') {
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