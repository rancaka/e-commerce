var axios = require('axios');

var rootUrl = 'http://localhost:3000';

var create = (item) => {
    return axios.post(`${rootUrl}/api/items`, { item })
        .then((newItem) => {
            return newItem.data;
        }, (err) => {
            throw err;
        });
};

var getItems = () => {
    return axios.get(`${rootUrl}/api/items`)
        .then((items) => {
            return items.data;
        }, (err) => {
            throw err;
        });
};

var getItem = (_id) => {
    return axios.get(`/api/item/${_id}`, (item) => {
        return item;
    });
};

module.exports = {
    create: create,
    getItems: getItems,
    getItem: getItem
};