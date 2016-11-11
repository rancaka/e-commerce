var items = [
    {
        _id: 1,
        name: 'Adidas',
        price: 1000000
    },
    {
        _id: 2,
        name: 'Nike',
        price: 1250000
    },
    {
        _id: 3,
        name: 'Dr. Martens',
        price: 1750000
    }
];

var getItems = () => {
    return items;
}

var getItem = (_id) => {
    return items.find((item) => (item._id == _id));
}

module.exports = {
    getItems: getItems,
    getItem: getItem
};