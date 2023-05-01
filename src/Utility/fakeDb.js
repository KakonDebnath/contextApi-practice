const addToDb = (id) => {
    let shoppingCart = {};
    const storedCart = getShoppingCart();
    if (storedCart) {
        shoppingCart = storedCart;
    } else {
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        shoppingCart[id] = quantity + 1;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const deleteFromDb = (id) => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
    else {
        alert("Didn't Added")
    }
}

const getShoppingCart = () => {
    const shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'));
    return shoppingCart;
}

const removedCart = () => {
    localStorage.removeItem("shopping-cart");
}

export { addToDb, deleteFromDb, getShoppingCart, removedCart };