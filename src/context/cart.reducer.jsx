import { addItem, reduceItem, clearItem } from './cart.utils';

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_HIDDEN':
            return {
                ...state,
                isHidden: !state.isHidden
            };
        case 'ADD_ITEM': 
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload)
            };
        case 'REDUCE_ITEM':
            return {
                ...state,
                cartItems: reduceItem(state.cartItems, action.payload)
            };
        case 'CLEAR_ITEM':
            return {
                ...state,
                cartItems: clearItem(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};

export default CartReducer;