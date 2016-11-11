var React = require('react');
var { connect } = require('react-redux');

class Home extends React.Component {
    render(){
        var { items } = this.props;
        return (
            <div>
                <h1>Home page</h1>
                <p>Items: {items}</p>
            </div>
        );
    }
}

module.exports = connect(
    (state) => {
        return {
            items: state.items
        }
    }
)(Home);