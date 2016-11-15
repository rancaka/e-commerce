var ItemAPI = require('../api/ItemAPI');

var createItem = (item) => {
    return (dispatch) => {
        return ItemAPI.create(item)
            .then((newItem) => {
                dispatch(addItem(newItem));
            }, (err) => {
                console.log(err);
            });
    }
};

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

var initItems = (items) => {
    return {
        type: 'INIT_ITEMS',
        items
    }
};

module.exports = {
    addItem: addItem,
    createItem: createItem,
    getItems: getItems,
    initItems: initItems,
    initItem: initItem
};
