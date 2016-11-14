var itemsReducer = (state=[], action) => {
    switch(action.type){
        case 'INIT_ITEMS':
            return [
                ...action.items
            ];
        case 'ADD_ITEM':
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
};

var itemReducer = (state={}, action) => {
    switch(action.type){
        case 'INIT_ITEM':
            return Object.assign({}, action.item);
        default:
            return state;
    }
};

module.exports = {
    itemsReducer: itemsReducer,
    itemReducer: itemReducer
};