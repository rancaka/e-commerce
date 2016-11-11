const redux = require('redux');
const { itemsReducer, itemReducer } = require('../reducers');

function configure(initState={}){

    var reducer = redux.combineReducers({
        items: itemsReducer,
        item: itemReducer
    });

    var store = redux.createStore(
        reducer,
        initState
    );

    return store;
}

module.exports = configure;