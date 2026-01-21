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
    const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = (item) => dispatch({ type: 'CLEAR_ITEM', payload: item });
    const reduceItem = (item) => dispatch({ type: 'REDUCE_ITEM', payload: item });

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