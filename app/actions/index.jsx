var axios = require('axios');

const rootUrl = 'http://localhost:3000';

module.exports = {
    createItem: createItem,
    findItem: findItem,
    getItems: getItems,
    removeItem: removeItem,
    updateItem: updateItem
};

function createItem(item) {
    return (dispatch) => {
        return axios.post(`${rootUrl}/api/items`, { item }).then((newItem) => {
            dispatch(_createItem(newItem.data));
        }, (err) => {
            throw err;
        });
    }
}

function findItem(_id) {
    return (dispatch) => {
        return axios.get(`${rootUrl}/api/item/${_id}`).then((item) => {
            dispatch(_findItem(item.data));
        }, (err) => {

        });
    }
}

function getItems() {
    return (dispatch) => {
        return axios.get(`${rootUrl}/api/items`).then((items) => {
            dispatch(_getItems(items.data));
        }, (err) => {
            throw err;
        });
    }
}

function removeItem(_id) {
    return (dispatch) => {
        return axios.delete(`${rootUrl}/api/item/${_id}`).then((status) => {
            dispatch(_removeItem(_id));
        }, (err) => {
            throw err;
        });
    }
}

function updateItem(item) {
    return (dispatch) => {
        return axios.put(`${rootUrl}/api/item/${item._id}`, { item }).then((updatedItem) => {
            dispatch(_updateItem(updatedItem.data));
        }, (err) => {
            throw err;
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

function _removeItem(_id) {
    return {
        type: 'REMOVE_ITEM',
        _id
    }
}

function _updateItem(updatedItem) {
    return {
        type: 'UPDATE_ITEM',
        updatedItem
    }
}
