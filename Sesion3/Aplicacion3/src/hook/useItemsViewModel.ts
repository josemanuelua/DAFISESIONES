import { useState } from "react";
import { Item } from "../api/api";
import { findElement, getItems, createElementVM} from "../viewmodel/itemsViewModel";



export const useItemsViewModel = ()=>{
    const [items] = useState<Item[]>(getItems());
    const [filtereditems, setFilteredItems] = useState<Item[]>(items);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen]= useState(false);

    const selectItemById = (id:number)=>{
        const item =findElement(id);
        if (item) setSelectedItem(item);
        else{
            setModalMessage("Item no encontrado");
            setIsModalOpen(true);
        } 
    };

    const createElement = (id:number,nombre:string, precio:number) =>{
        const newitem:Item ={
            id: id,
            name: nombre,
            price: precio
        };
        createElementVM(newitem);
    }

    const filterElements = (cadenabusqueda:string) =>{
        
        setFilteredItems (items.filter((item)=> item.name.toLocaleLowerCase().includes(cadenabusqueda.toLocaleLowerCase())));
    }

    const resetFilter = () => { 
        setFilteredItems(items);
    }

    return {items, filtereditems, selectedItem, selectItemById, createElement, filterElements, resetFilter, modalMessage, setModalMessage, isModalOpen, setIsModalOpen};
};


 