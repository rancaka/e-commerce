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

module.exports = {
    itemsReducer: itemsReducer
};