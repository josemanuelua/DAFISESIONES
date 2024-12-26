import { useState } from "react";
import { Item } from "../api/api";
import { findElement, getItems, createElementVM} from "../viewmodel/itemsViewModel";



export const useItemsViewModel = ()=>{
    const [items] = useState<Item[]>(getItems());
    const [filtereditems, setFilteredItems] = useState<Item[]>(items);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    //Manejamos mediante variables de estado los mensajes que mostrará el modal y su estado
    //si esta abierto o cerrado, para mostrarlo o no según esta variable
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen]= useState(false);

    //Cuando Llamamos a esta funcion si encuentra un item lo agrega a la variable de estado
    //selectedItem que nos servirá como condicion para mostrar el modal de Detalle y ademas
    //para conocer los datelles del item encontrado para mostrarlo en el modal
    const selectItemById = (id:number):boolean=>{
        const item =findElement(id);
        if (item){
            setSelectedItem(item);
            return true;
        } 
        else{
            setModalMessage("Item no encontrado");
            setIsModalOpen(true);
            setSelectedItem(null);
            return false;
        } 
    };

    //Creamos una funcion para crear un nuevo elemento en la lista
    //tomamos el id nombre y precio del modal del formulario de envio y lo pasamos a la funcion
    //que hemos creado en el viewmodel que a su vez se comunicara con la parte de la api
    //donde se aloja la lista de items
    const createElement = (id:number,nombre:string, precio:number) =>{
        const newitem:Item ={
            id: id,
            name: nombre,
            price: precio
        };
        createElementVM(newitem);
    }

    //Filtramos la cadena original y obtenemso una nueva cadena que nsos devuelve lso elementos que contengan los caracteres de 
    //la cadena de búsqueda.
    const filterElements = (cadenabusqueda:string) =>{
        
        setFilteredItems (items.filter((item)=> item.name.toLocaleLowerCase().includes(cadenabusqueda.toLocaleLowerCase())));
    }

    //Cuando llamemos a esta funcion volvemos a cargar la lista original que tenemos guardada
    const resetFilter = () => { 
        setFilteredItems(items);
    }

    return {items, filtereditems, selectedItem, selectItemById, createElement, filterElements, resetFilter, modalMessage, setModalMessage, isModalOpen, setIsModalOpen};
};


 