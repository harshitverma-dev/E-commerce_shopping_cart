export const cartReducer = (state, action) => {
    switch (action.type) {
        case "Add_To_Cart":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }

            break;
        case "Remove_From_Cart":
            return {
                ...state,
                cart: state.cart.filter((c) => c.id !== action.payload)
            }
            break;

        case "Change_Cart_Qty":
            return {
                ...state,
                cart: state.cart.filter((c) => 
                c.id == action.payload.id ? (c.qty = action.payload.qty) : c.qty)
            }
        default:
            return state;
    }
}