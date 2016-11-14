const redux = require('redux');
var thunk = require('redux-thunk').default;

const { itemsReducer, itemReducer } = require('../reducers');

function configure(initState={}){

    var reducer = redux.combineReducers({
        items: itemsReducer,
        item: itemReducer
    });

    var store = redux.createStore(
        reducer,
        initState,
        redux.compose(
            redux.applyMiddleware(thunk)
        )
    );

    return store;
}

module.exports = configure;