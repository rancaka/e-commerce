var React = require('react');
var { connect } = require('react-redux');
var { Link } = require('react-router');

var Navbar = require('./Navbar');

class AppRoot extends React.Component {

    render(){

        return (
            <div>
                <Navbar />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

module.exports = connect()(AppRoot);