var React = require('react');

var ItemForm = require('./ItemForm');
var ItemList = require('./ItemList');

class AdminItems extends React.Component {
    render() {
        return (
            <div>
                <ItemForm type="Create" />
                <hr />
                <ItemList />
            </div>
        );
    }
}

module.exports = AdminItems;