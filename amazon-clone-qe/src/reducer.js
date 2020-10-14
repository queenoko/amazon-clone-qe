// data layer logic

export const initialState = {
    basket: [
        {
                id:"123456775",
                title:"Comic books for children for all ages",
                price:499,
                rating:5,
                image:"https://upload.wikimedia.org/wikipedia/commons/6/65/Fair_use_icon_-_Comics.svg"
        },
    ],
    user: null,
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