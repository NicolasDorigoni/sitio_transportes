import '../../styles/components/layout/Nav.css';

// import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>

        </nav>
    );
}

export default Nav;