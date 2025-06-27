//Criar um carrinho de compras baseado no carrinho de compras da shoppe, onde o carrinho armazena itens e faz o calculo de sub-itens 
import createItem from './services/item.js';
import * as cartService from './services/cart.js';

const myCart = [];

const item1 = await createItem("Faca", 20.99, 1);
const item2 = await createItem("HOTT", 21.01, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, 1);





await cartService.displayCart(myCart);






