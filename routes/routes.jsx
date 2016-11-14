var React = require('react');
var { Router, Route, IndexRoute, browserHistory } = require('react-router');

var AppRoot = require('../app/components/AppRoot');
var Home = require('../app/components/Home');
var Admin = require('../app/components/Admin');
var AdminItems = require('../app/components/AdminItems');
var ItemDetail = require('../app/components/ItemDetail');


if(typeof window === 'object'){
    var createElement = (Component, renderProps) => {
        return <Component {...renderProps} {...window.PROPS}/>
    }
}

module.exports = (
    <Router history={browserHistory} createElement={createElement}>
        <Route path="/" component={AppRoot}>
            <IndexRoute component={Home} />
            <Route path="a" component={Admin}>
                <IndexRoute component={AdminItems} />
            </Route>
            <Route path=":_id" component={ItemDetail} />
        </Route>
    </Router>
);