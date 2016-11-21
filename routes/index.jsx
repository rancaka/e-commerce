var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var {RouterContext, match} = require('react-router');
var { Provider } = require('react-redux');

var routes = require('./routes.jsx');
var store = require('../app/store/configureStore')();
var actions = require('../app/actions');

var ItemAPI = require('./items/ItemAPI');

router.get('/', (req, res, next) => {
    store.dispatch(actions.getItems());
    next();
});

router.get('/a', (req, res, next) => {
    store.dispatch(actions.getItems());
    next();
});

ItemAPI.create(router);
ItemAPI.find(router);
ItemAPI.get(router);
ItemAPI.remove(router);
ItemAPI.update(router);

router.get('/:_id', (req, res, next) => {
    store.dispatch(actions.findItem(req.params._id));
    next();
});

router.get('*', (req, res) => {
    match({
        routes: routes,
        location: req.url
    }, (error, redirectLocation, renderProps) => {
            if(renderProps){
                var app = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps}
                        createElement={(Component, renderProps) => {
                            return <Component {...renderProps}/>
                        }}
                        />
                    </Provider>
                );
                res.render('index', {app: app, props: Object.assign(renderProps), state: store.getState()});
            } else {
                res.status(404).send('Not Found');
            }
    });
});

module.exports = router;