import React, { useEffect , useState} from "react";
import RelojDisplay from "./RelojDisplay";
import HoraList from "./HoraList";

interface Item{
    id:number;
    hora :string;
}

const Reloj:React.FC = ():JSX.Element=>{
    const [time, setTime]= useState<string>(new Date().toLocaleTimeString());
    const [listaHoras, setlistaHoras] = useState<Item[]>([]);
    //Con el segundo argumento como [] lo que hacemos es que solo se ejecuta al montar el componente
    //Cuando se ejecuta llamara a un setTime y espera un segundo y hace que el estado time se actualice,
    // lo que hará que se renderice la pagina de nuevo con el uevo valor de time y asi cada segundo.
    useEffect(()=>{
        console.log("elemento montado")
        const intervalo = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())      
        }, 1000)

        return ()=> {
            console.log("elemento desmontado");
            clearInterval(intervalo);
        }
    },[]);

    const guardarHora = () => {
        //Cada vez que pulsamos el botón se llama a esta funcion que inicializa nuevaHora con la longitud
        // de la lista listaHoras como id y y time como hora 
        const nuevaHora:Item = {id:listaHoras.length, hora: time};
        //Con esta linea añadimos nuevaHora a una lista nueva y será la que se guarda en listaHoras
        //listaHoras al ser inmutable debe actualizarse así
        setlistaHoras([...listaHoras,nuevaHora]);
    }
    return(
        <>
            <RelojDisplay time={time}/>
            <button onClick={guardarHora}>Guardar Hora</button>
            <HoraList listaHoras={listaHoras}/>
        </>
    );
};

export default Reloj