import React from 'react'
interface Item {
    id: number;
    hora: string;
}

interface HoraListProps{
    listaHoras: Item[];
    // definimos eliminarHora que sera una funcion que acepta un parametro con el id de la listaHora y no devuelve nada
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
                        {/* Cada vez que se pulsa el boton eliminar se llama a la funcion eliminarHora definida en el componente Reloj
                        pasandole como parametro el id de la lista para identificar la hora que se quiere eliminar */}
                        <button className="btnEliminar" onClick={()=> eliminarHora(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
        </div>
    );

};

export default HoraList