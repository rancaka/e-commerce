var React = require('react');

class Admin extends React.Component {
    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <div className="container">{ this.props.children }</div>
            </div>
        );
    }
}

module.exports = Admin;