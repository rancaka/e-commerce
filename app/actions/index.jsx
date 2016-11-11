var ItemAPI = require('../api/ItemAPI');

var initItems = () => {
    return {
        type: 'INIT_ITEMS',
        items: ItemAPI.getItems()
    }
};

var initItem = (_id) => {
    return {
        type: 'INIT_ITEM',
        item: ItemAPI.getItem(_id)
    }
}

module.exports = {
    initItems: initItems,
    initItem: initItem
};
