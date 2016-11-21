var ItemAPI = require('../api/ItemAPI');

module.exports = {
    createItem: createItem,
    findItem: findItem,
    getItems: getItems,
    updateItem: updateItem
};

function createItem(item) {
    return (dispatch) => {
        return ItemAPI.create(item)
            .then((newItem) => {
                dispatch(_createItem(newItem));
            }, (err) => {
                console.log(err);
            });
    }
}

function findItem(_id) {
    return (dispatch) => {
        return ItemAPI.find(_id)
            .then((item) => {
                dispatch(_findItem(item));
            }, (err) => {
                console.log(err);
            });
    }
}

function getItems() {
    return (dispatch) => {
        return ItemAPI.get()
            .then((items) => {
                dispatch(_getItems(items));
            }, (err) => {
                console.log(err);
            });
    }
}

function updateItem(item) {
    return (dispatch) => {
        return ItemAPI.update(item)
            .then((updatedItem) => {
                dispatch(_updateItem(updatedItem));
            }, (err) => {
                console.log(err);
            });
    }
}

//Private actions
//Use this after getting data from API
//======================================================================================================================
function _createItem(item) {
    return {
        type: 'CREATE_ITEM',
        item
    }
}

function _findItem(item) {
    return {
        type: 'FIND_ITEM',
        item
    }
}

function _getItems(items) {
    return {
        type: 'GET_ITEMS',
        items
    }
}

function _updateItem(updatedItem) {
    return {
        type: 'UPDATE_ITEM',
        updatedItem
    }
}
