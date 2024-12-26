import {NavLink, Outlet} from "react-router-dom"
import Header from "./Header";

const Help = ():React.JSX.Element =>{

    return(
   
    <div>
        <Header />
        <h1>Pagina Ayuda</h1>
        <nav><NavLink to="referencia">Referencia</NavLink> | <NavLink to="preguntas">Preguntas frecuentes</NavLink></nav>
        <Outlet/>
    </div>
        
    );
};

export default Help;