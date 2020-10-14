// data layer logic

export const initialState = {
    basket: [],
};

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
            return { state };
        default:
            return state;
    }
}

export default reducer;