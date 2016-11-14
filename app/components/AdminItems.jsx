var React = require('react');
var ItemForm = require('./ItemForm');

class AdminItems extends React.Component {
    render() {
        return (
            <div>
                <h1>Admin Items Page</h1>
                <ItemForm />
                <hr />
            </div>
        );
    }
}

module.exports = AdminItems;