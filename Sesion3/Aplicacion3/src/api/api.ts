export interface Item{
    id: number;
    name: string;
    price: number;
}

const items:Item[] = [
    {id: 0, name: "reloj", price: 10},
    {id: 1, name: "cartera", price: 5},
    {id: 2, name: "gafas", price:15},
]; 

export const getItemsAPI = ():Item[]=>{
    return items;

};

export const findElementByIdAPI = (id:number):Item | null=>{
    return items.find((item)=> item.id === id) || null;
};

export const createElementByAPI = (item:Item) => {
    items.push(item);
}

