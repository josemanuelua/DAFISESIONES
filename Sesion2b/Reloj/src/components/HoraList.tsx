import React from 'react'
interface Item {
    id: number;
    hora: string;
}

interface HoraListProps{
    listaHoras: Item[];
    eliminarHora: (id:number)=>void
}

const HoraList:React.FC<HoraListProps> = ({listaHoras, eliminarHora}) =>{

    return(
        <div className="lista de horas">
                <h2>Lista de Horas Guardadas</h2>
                <ul>
                    {listaHoras.map((item) => (
                        <li key={item.id}>
                        <strong>{item.hora}</strong>
                        <button className="btnEliminar" onClick={()=> eliminarHora(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
        </div>
    );

};

export default HoraList