import React, { useState } from 'react';
import { useItemsViewModel } from "../hook/useItemsViewModel";

const ItemsList: React.FC = () => {
    const { items, selectedItem, selectItemById, createElement } = useItemsViewModel();
    const [searchId, setSearchId] = useState("");
    const [insertarName, setInsertarName] = useState("");
    const [insertarPrecio, setinsertarPrecio] = useState("");
    const [crear_Estado, setCrear_Estado] = useState(false);
   
    const handleSearch = () => {
        const id = parseInt(searchId, 10);
        if (isNaN(id)) alert("El id debe ser un numero entero")
        else selectItemById(id);
    }
    const handleNuevo = ()=>{
        setCrear_Estado(true);
    }

    const handleInsertar=()=>{
        const precio = parseFloat(insertarPrecio);
        if(isNaN(precio)){
            alert("El precio debe de ser un numero");
        }else{
            createElement(items.length,insertarName,precio);
            setCrear_Estado(false);
        }
 

    }
    return (
        <div>
            <h2>Lista de productos</h2>
            <input type="text" placeholder="Buscar por ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            <button onClick={handleNuevo}>Nuevo Elemento</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id} onClick={() => selectItemById(item.id)}>
                        ID:{item.id} - {item.name} 
                    </li>
                ))}
            </ul>

            {selectedItem && (
                <div>
                    <h3>Detalle de producto</h3>
                    <p>ID: {selectedItem.id}</p>
                    <p>Nombre: {selectedItem.name}</p>
                    <p>Precio: {selectedItem.price}</p>
                </div>
            )}

            {crear_Estado && (
                <div>
                    <h3>Formulario de insercion de nuevo producto</h3>
                    <input type="text"  value={items.length}/>
                    <input type="text" placeholder="Introduce nombre" onChange={(e) => setInsertarName(e.target.value)}/>
                    <input type="text" placeholder='Introduce precio' onChange={(e) => setinsertarPrecio(e.target.value)}/>
                    <button onClick={handleInsertar}>Insertar</button>
                </div>
            )}
        </div>

    );
};

export default ItemsList;