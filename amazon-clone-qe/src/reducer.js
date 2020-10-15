// data layer logic

export const initialState = {
    basket: [],
    user: null,
};

//Incrementing the prices in the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            // LOGIC FOR ADDING ITEM TO BASKET
            return { 
                ...state,
                basket: [...state.basket, action.item]
             };
        case 'REMOVE_FROM_BASKET':
            //Logic for removing item from basket

            // we cloned the basket
             let newBasket = [...state.basket];

             //we check to see if the product exist
             const index = state.basket.findIndex(
                 (basketItem) => basketItem.id === action.id
             );

             if (index >= 0) {
                 //if item exist in basket, remove it...
                 newBasket.splice(index, 1);
             }else {
                 console.warn(
                     'Cant remove product (id: ${action.id}) as its not in basket '
                 );
            }


            return { 
                ...state,
                basket: newBasket 
            };
        default:
            return state;
    }
};

export default reducer;