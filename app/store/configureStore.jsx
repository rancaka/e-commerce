const redux = require('redux');
const { itemsReducer } = require('../reducers');

function configure(initState={}){

    var reducer = redux.combineReducers({
        items: itemsReducer
    });

    var store = redux.createStore(
        reducer,
        initState
    );

    return store;
}

module.exports = configure;