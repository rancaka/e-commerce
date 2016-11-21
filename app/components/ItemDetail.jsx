var React = require('react');
var { connect } = require('react-redux');

var { findItem } = require('../actions');

class ItemDetail extends React.Component {

    componentDidMount(){
        var { dispatch, routeParams} = this.props;
        dispatch(findItem(routeParams._id));
    }

    render(){
        var {name, price} = this.props.item;

        return (
            <div>
                <h1>This is Item Detail page for: {name}</h1>
                <p>Price: {price}</p>
            </div>
        );
    }
}

module.exports = connect(
    (state) => ({
        item: state.item
    })
)(ItemDetail);