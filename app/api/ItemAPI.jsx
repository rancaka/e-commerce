const axios = require('axios');

const rootUrl = 'http://localhost:3000';

module.exports = {
    create: create,
    find: find,
    get: get,
    remove: remove,
    update: update

};

function create(item) {
    return axios.post(`${rootUrl}/api/items`, { item })
        .then((newItem) => {
            return newItem.data;
        }, (err) => {
            throw err;
        });
}

function find(_id) {
    return axios.get(`${rootUrl}/api/item/${_id}`)
        .then((item) => {
            return item.data;
        }, (err) => {
            throw err;
        });
}

function get() {
    return axios.get(`${rootUrl}/api/items`)
        .then((items) => {
            return items.data;
        }, (err) => {
            throw err;
        });
}

function remove(_id) {
    return axios.delete(`${rootUrl}/api/item/${_id}`)
        .then((status) => {
            return status.data;
        }, (err) => {
            throw err;
        })
}

function update(item) {
    return axios.put(`${rootUrl}/api/item/${item._id}`, { item })
        .then((updatedItem) => {
            return updatedItem.data;
        }, (err) => {
            throw err;
        });
}