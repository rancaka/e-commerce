var React = require('react');
var { connect } = require('react-redux');

class ItemDetail extends React.Component {
    render(){
        return (
            <div>
                <h1>This is Item Detail page</h1>
                <p>And these are the items: {this.props.items}</p>
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
)(ItemDetail);