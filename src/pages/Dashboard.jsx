import Header from "../components/Header"
import { Link } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <main>
            <Header />
            <section className="panel-control">
                <nav>
                    <Link>Recetas Vegetariasn</Link>
                    <Link>Recetas No Vegetarianas</Link>
                </nav>
                <section>

                </section>
            </section>
        </main>
    )
}

export default Dashboard