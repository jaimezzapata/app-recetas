import './Login.css'
const Login = () => {
    return (
        <form className="form" action="">
            <section>
                <div>
                    <label htmlFor="usuario">Usuario</label>
                    <input id="usuario" type="text" />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input id="password" type="text" />
                </div>
                <button className="button" type="button">Iniciar Sesión</button>
            </section>
        </form>
    )
}

export default Login