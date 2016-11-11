var React = require('react');

var ItemList = require('./ItemList');

class Home extends React.Component {
    render(){
        return (
            <div>
                <h1>Home page</h1>
                <ItemList />
            </div>
        );
    }
}

module.exports = Home;