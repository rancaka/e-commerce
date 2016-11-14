var React = require('react');

var ItemList = require('./ItemList');

class Home extends React.Component {
    render(){
        return (
            <div>
                <div className="row category-list">
                </div>
                <ItemList />
            </div>
        );
    }
}

module.exports = Home;