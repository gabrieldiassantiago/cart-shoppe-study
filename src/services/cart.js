//quais ações o carrinho deve ter?

//casos de uso

//adicionar item
async function addItem(useCart, item) {
    useCart.push(item)
}

//remover item

async function deleteItem(useCart, name) {
 const index = useCart.findIndex((item ) => item.name === name)
 
 if (index !== -1) {
    useCart.splice(index, 1)
 }

}


async function displayCart(useCart) {
    console.log("\n🛒 Shopping Cart:");
    console.log("=" .repeat(50));
    
    if (useCart.length === 0) {
        console.log("Your cart is empty.");
        return;
    }
    
    useCart.forEach((item, index) => {
        const itemTotal = item.subtotal ? item.subtotal() : (item.price * item.quantity);
        console.log(`${index + 1}. ${item.name}`);
        console.log(`   Price: $${item.price.toFixed(2)} | Qty: ${item.quantity} | Subtotal: $${itemTotal.toFixed(2)}`);
        console.log("-".repeat(40));
    });
    
    // Display total
    const total = useCart.reduce((sum, item) => {
        const itemTotal = item.subtotal ? item.subtotal() : (item.price * item.quantity);
        return sum + itemTotal;
    }, 0);
    
    console.log(`\n💰 Total: $${total.toFixed(2)}`);
    console.log("=" .repeat(50));
}




//calcular total
async function calculateTotal(useCart) {
    const result = useCart.reduce((total, item) => total +  item.subtotal(), 0 )
    console.log(result)
}

//remover item > diminui quantidade

async function removeItem(useCart, index) {
    if (index >= 0 && index < useCart.length) {
        useCart.splice(index, 1);
    }
}

export {
    addItem,
    deleteItem,
    calculateTotal,
    displayCart,
    removeItem
}
