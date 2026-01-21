export const addItem = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === itemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const reduceItem = (cartItems, itemToReduce) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === itemToReduce.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== itemToReduce.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === itemToReduce.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const clearItem = (cartItems, itemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};