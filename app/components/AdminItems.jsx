var React = require('react');

var ItemForm = require('./ItemForm');
var ItemList = require('./ItemList');

class AdminItems extends React.Component {
    render() {
        return (
            <div>
                <h1>Admin Items Page</h1>
                <ItemForm />
                <hr />
                <ItemList />
            </div>
        );
    }
}

module.exports = AdminItems;