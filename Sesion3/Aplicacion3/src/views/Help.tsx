import {Link, Outlet} from "react-router-dom"
import Header from "./Header";

const Help = ():React.JSX.Element =>{

    return(
   
    <div>
        <Header />
        <h1>Pagina Ayuda</h1>
        <nav><Link to="referencia">Referencia</Link> | <Link to="preguntas">Preguntas frecuentes</Link></nav>
        <Outlet/>
    </div>
        
    );
};

export default Help;