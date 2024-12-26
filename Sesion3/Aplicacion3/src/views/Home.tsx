import Header from "./Header";
import ItemsList from "./ItemsList";
//Para cumplir con el punto 2 creamos un componente ItemList que mostrará la lista items
const Home = ():React.JSX.Element =>{

    return(
    <div>
        <Header/>
        <h1>Página Principal</h1>
        <ItemsList/>
    </div>
    );
};

export default Home;