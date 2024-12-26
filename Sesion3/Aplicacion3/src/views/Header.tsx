import {NavLink, useNavigate} from "react-router-dom"
//Creamos un elemento Header que será común a las pagina de Inicio y ayuda para que siempre esté visible
//para cumplir con el apartado 1.

//Si queremos usar un boton para navegar pr las pagina necesitamos el hook useNAvigate, para navegar progrmáticamente
//esto cumple con el apartado 5
const Header = ():React.JSX.Element =>{

    const navigate = useNavigate(); // Inicializa useNavigate

    // Función para manejar la navegación
    const goToHelp = () => {
      navigate('/help'); // Navega a la ruta '/help'
    };

    return(        
        <nav>
        <NavLink to="/">Inicio</NavLink> | <button onClick={goToHelp} className="button-link">Ayuda</button>
        </nav>
    );
};

export default Header;