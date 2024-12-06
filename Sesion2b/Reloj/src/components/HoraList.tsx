import React from 'react'
interface Item {
    id: number;
    hora: string;
}

interface HoraListProps{
    listaHoras: Item[];
}

const HoraList:React.FC<HoraListProps> = ({listaHoras}) =>{

    return(
        <div className="lista de horas">
                <h2>Lista de Horas Guardadas</h2>
                <ul>
                    {listaHoras.map((item) => (
                        <li key={item.id}>
                        <strong>{item.hora}</strong>
                        </li>
                    ))}
                </ul>
        </div>
    );

};

export default HoraList