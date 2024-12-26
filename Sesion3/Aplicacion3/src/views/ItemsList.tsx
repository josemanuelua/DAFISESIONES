import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useItemsViewModel } from "../hook/useItemsViewModel";
import Modal from './Modal/Modal';

const ItemsList: React.FC = () => {
    const { items, filtereditems, selectedItem, selectItemById, createElement, filterElements, resetFilter,
        modalMessage, setModalMessage, isModalOpen, setIsModalOpen } = useItemsViewModel();
    const [searchId, setSearchId] = useState("");
    const [insertarName, setInsertarName] = useState("");
    const [insertarPrecio, setinsertarPrecio] = useState("");
    const [busqueda, setBusqueda] = useState("");
    const [ismodalDetalle, setIsModalDetalle] = useState(false);
    const [isModalNuevo, setIsModalNew] = useState(false);

    // Obtener el ID desde la URL
    const { id } = useParams<{ id?: string }>();

    //Usamos useEffect para gestionar la condicion correctamente para el renderizado del componente,
    //sino existen problemas al renderizar si se usa el condicional directamente
    useEffect(() => {
        if (id) {
            const Idparseado = parseInt(id, 10);
            if (isNaN(Idparseado)) {
                setModalMessage("El ID en la URL no es válido.");
                setIsModalOpen(true);
            } else {
                const encontrado = selectItemById(Idparseado);
                if (encontrado) {
                    handleOpenDetailModal();
                }
            }
        } else {
            resetFilter(); // Muestra todos los elementos si no hay ID en la URL
        }
    }, [id]);

    const handleSearch = () => {
        const id = parseInt(searchId, 10);
        if (isNaN(id)) {
            setModalMessage("El id debe ser un numero entero");
            setIsModalOpen(true);
        }
        else {
            const encontrado = selectItemById(id);
            if (encontrado) {
                handleOpenDetailModal();
            } else {
                // Aseguramos que el modal de detalle se cierre cuando no se encuentra el ítem
                handleCloseDetailModal();
            }
        }
    }

    const handleInsertar = () => {
        const precio = parseFloat(insertarPrecio);
        if (isNaN(precio)) {
            setModalMessage("El precio debe de ser un numero");
            setIsModalOpen(true);
        } else {
            createElement(items.length, insertarName, precio);
            handleCloseNewModal();
        }
    }

    const handleFiltrar = () => {
        filterElements(busqueda);
    }

    const handleMostrarTodo = () => {
        resetFilter();
    }

    //Creamos manejadores separados para el modal de detalle
    const handleOpenDetailModal = () => {
        setIsModalDetalle(true);
    }

    const handleCloseDetailModal = () => {
        setIsModalDetalle(false);
    }

    //Creamos manejadores separados para el modal de nuevo elemento
    const handleCloseNewModal = () => {
        setIsModalNew(false);
    }
    const handleOpenNewModal = () => {
        setIsModalNew(true);
    }
    return (
        <div>
            <div id="buscar">
                <input type="text" placeholder="Buscar por ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <button onClick={handleSearch}>Buscar</button>
                <button onClick={handleOpenNewModal}>Nuevo Elemento</button>
            </div>
            <div id="filtrar">
                <input type="text" placeholder="Cadena de búsqueda" onChange={(e) => setBusqueda(e.target.value)} />
                <button onClick={handleFiltrar}>Filtrar</button>
                <button onClick={handleMostrarTodo}>Mostrar Todo</button>
            </div>

            {/* Aqui cumplimos con el punto 2.a para visualizar el id y el nombre de cada item de la lista*/}
            <h2>Lista de productos</h2>
            <ul>
                {filtereditems.map((item) => (
                    <li key={item.id} onClick={() => {
                        handleOpenDetailModal();
                        selectItemById(item.id)
                    }}>
                        ID:{item.id} - {item.name}
                    </li>
                ))}
            </ul>

            {/* Aqui cumplimos con el punto 6 para mostar el item en un modal*/}

            <Modal isOpen={ismodalDetalle} onClose={handleCloseDetailModal} title="Detalle del Producto">
                {selectedItem && (
                    <>
                        <p><strong>ID:</strong> {selectedItem.id}</p>
                        <p><strong>Nombre:</strong> {selectedItem.name}</p>
                        <p><strong>Precio:</strong> {selectedItem.price}</p>
                    </>

                )}

            </Modal>



            <Modal isOpen={isModalNuevo} onClose={handleCloseNewModal} title="Formulario de insercion de nuevo producto">
                <div className='formulario'>
                    <input type="text" value={items.length} />
                    <input type="text" placeholder="Introduce nombre" onChange={(e) => setInsertarName(e.target.value)} />
                    <input type="text" placeholder='Introduce precio' onChange={(e) => setinsertarPrecio(e.target.value)} />
                    <button onClick={handleInsertar}>Insertar</button>
                </div>

            </Modal>

            {/* Modal generico para errores */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Atención">
                <p>{modalMessage}</p>
            </Modal>
        </div>

    );
};

export default ItemsList;