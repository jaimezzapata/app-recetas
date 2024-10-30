import { useEffect, useState } from "react"
let urlUsuarios = 'http://localhost:3000/usuarios'

const Register = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [hobbies, setHobbies] = useState('')
    const [usuarios, setUsuarios] = useState('')

    function getUsuarios() {
        fetch(urlUsuarios)
            .then(response => response.json())
            .then(json => setUsuarios(json))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getUsuarios()
    }, [])

    function crearUsuario() {
        let nuevoUsuario = {
            user: usuario,
            password,
            name: nombre,
            email: correo,
            hobbies
        }
        fetch(urlUsuarios, {
            method: 'POST',
            body: nuevoUsuario
        })
            .then(response => response.json())
            .then(json => setUsuarios(json))
            .catch(error => console.log(error))
    }

    function buscarUsuario() {
        let auth = usuarios.some((item) => item.user == usuario || item.email == correo)
        return auth
    }

    function registrarUsuario() {
        if (buscarUsuario()) {
            alert('Usuario y/o correo ya existe en la base de datos')
        } else {
            crearUsuario()
        }
    }


    return (
        <form>
            <input onChange={(e) => { setUsuario(e.target.value) }} placeholder="Usuario" type="text" />
            <input onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" type="text" />
            <input onChange={(e) => { setNombre(e.target.value) }} placeholder="Nombre" type="text" />
            <input onChange={(e) => { setCorreo(e.target.value) }} placeholder="Correo" type="text" />
            <input onChange={(e) => { setHobbies(e.target.value) }} placeholder="Hobbies" type="text" />
            <div>
                <button onClick={registrarUsuario} type="button">Registrar</button>
            </div>
        </form>
    )
}

export default Register