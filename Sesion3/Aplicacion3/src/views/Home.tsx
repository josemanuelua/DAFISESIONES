import {Link} from "react-router-dom"
import Header from "./Header";
import ItemsList from "./ItemsList";

const Home = ():React.JSX.Element =>{

    return(
    <div>
        <Header/>
        <h1>Pagina Principal</h1>
        <ItemsList/>
    </div>
    );
};

export default Home;