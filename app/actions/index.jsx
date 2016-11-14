var ItemAPI = require('../api/ItemAPI');

var getItems = () => {
    return (dispatch) => {
        return ItemAPI.getItems()
            .then((items) => {
                dispatch(initItems(items));
            }, (err) => {
                console.log(err);
            });
    }
};

var initItems = (items) => {
    return {
        type: 'INIT_ITEMS',
        items
    }
};

var initItem = (_id) => {
    return {
        type: 'INIT_ITEM',
        item: ItemAPI.getItem(_id)
    }
};

var addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        item
    }
};

module.exports = {
    addItem: addItem,
    getItems: getItems,
    initItems: initItems,
    initItem: initItem
};
