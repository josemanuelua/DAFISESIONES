import { getItemsAPI, Item, findElementByIdAPI, createElementByAPI } from "../api/api";

export const getItems = ():Item[] => getItemsAPI();
export const findElement = (id:number):Item | null => {
    return findElementByIdAPI(id);
}; 

export const createElementVM = (item:Item) => createElementByAPI(item);