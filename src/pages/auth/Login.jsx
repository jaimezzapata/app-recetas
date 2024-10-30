import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
let urlUsuarios = 'http://localhost:3000/usuarios'

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [usuarios, setUsuarios] = useState([])
    let redireccion = useNavigate()

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
        // console.log(findUser())
        if (findUser()) {
            redireccion('/')
        }
    }
    function findUser() {
        let auth = usuarios.some((item) => item.user == usuario && item.password == contrasena)
        return auth
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
                <Link to="/register">¿No tiene cuenta?</Link>
            </section>
        </form>
    )
}

export default Login