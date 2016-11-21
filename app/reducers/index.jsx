module.exports = {
    itemsReducer: itemsReducer,
    itemReducer: itemReducer
};

function itemsReducer (state=[], action) {
    switch(action.type){
        case 'GET_ITEMS':
            return [
                ...action.items
            ];
        case 'CREATE_ITEM':
            return [
                action.item,
                ...state
            ];
        case 'REMOVE_ITEM':
            return state.filter((item) => {
                return item._id !== action._id;
            });
        case 'UPDATE_ITEM':
            return state.map((item) => {
                if (item._id === action.updatedItem._id) {
                    return action.updatedItem;
                }
                return item;
            });
        default:
            return state;
    }
}

function itemReducer (state={}, action) {
    switch(action.type){
        case 'FIND_ITEM':
            return Object.assign({}, action.item);
        default:
            return state;
    }
}