var bodyParserJSON = require('body-parser').json({extended: true});

var Item = require('../Item');

var getItems = (router) => {
    router.get('/api/items', (req, res) => {
        Item.find({}, (err, items) => {
            if (err) res.send(404);
            res.json(items);
        });
    });
};

var create = (router) => {
    router.post('/api/items', bodyParserJSON, (req, res) => {
        Item.create(req.body.item, (err, newItem) => {
            res.json(newItem);
        });
    });
};

module.exports = {
    getItems: getItems,
    create: create
};