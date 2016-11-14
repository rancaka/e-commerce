var axios = require('axios');

var rootUrl = 'http://localhost:3000';

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
    getItems: getItems,
    getItem: getItem
};