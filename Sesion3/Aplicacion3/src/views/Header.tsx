import {NavLink} from "react-router-dom"

const Header = ():React.JSX.Element =>{

    return(        
        <nav>
        <NavLink to="/">Inicio</NavLink> | <NavLink to="/help">Ayuda</NavLink>
        </nav>
    );
};

export default Header;