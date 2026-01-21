import { Children, createContext, useReducer } from "react";

import CartReducer from "./cart.reducer";

const INITIAL_STATE = {
    isHidden: true,
    cartItems: [],
};

export const CartContext = createContext({
    isHidden: true,
    cartItems: [],
    toggleHidden: () => { },
    addItem: () => { },
    removeItem: () => { },
    reduceItem: () => { }
});

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
    const { isHidden, cartItems } = state;

    const toggleHidden = () => dispatch({ type: 'TOGGLE_HIDDEN' });
    const addItem = (itemId) => dispatch({ type: 'ADD_ITEM', payload: itemId });
    const removeItem = (itemId) => dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    const reduceItem = (itemId) => dispatch({ type: 'REDUCE_ITEM', payload: itemId });

    const value = {
        isHidden,
        cartItems,
        toggleHidden,
        addItem,
        reduceItem,
        removeItem
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}