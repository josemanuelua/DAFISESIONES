import { getItemsAPI, Item, findElementByIdAPI, createElementByAPI } from "../api/api";

export const getItems = ():Item[] => getItemsAPI();
export const findElement = (id:number):Item | null => {
    return findElementByIdAPI(id);
}; 
//Creamos una nueva funcion para agregar un item a la lista
export const createElementVM = (item:Item) => createElementByAPI(item);