import { useState } from "react";
import { Item } from "../api/api";
import { findElement, getItems, createElementVM} from "../viewmodel/itemsViewModel";

export const useItemsViewModel = ()=>{
    const [items] = useState<Item[]>(getItems());
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    var newitem:Item = {id:0, name:'', price:0};
    const selectItemById = (id:number)=>{
        const item =findElement(id);
        if (item) setSelectedItem(item);
        else alert("Item no encontrado");
    };

    const createElement = (id:number,nombre:string, precio:number) =>{
        newitem.id = id;
        newitem.name = nombre;
        newitem.price = precio;
        createElementVM(newitem);
        newitem = {id:0, name:'', price:0};

    }
    return {items, selectedItem, selectItemById, createElement};
};


 