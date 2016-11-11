var itemsReducer = (state=[], action) => {
    switch(action.type){
        case 'INIT_ITEMS':
            return [
                ...action.items
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
}

module.exports = {
    itemsReducer: itemsReducer,
    itemReducer: itemReducer
};