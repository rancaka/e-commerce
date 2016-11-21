var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');

var { findItem } = require('../actions');

class ItemDetail extends React.Component {

    componentDidMount(){
        var { dispatch, routeParams} = this.props;
        dispatch(findItem(routeParams._id));
    }

    render(){
        var {name, price, createdAt, updatedAt} = this.props.item;

        return (
            <div>
                <h1>This is Item Detail page for: {name}</h1>
                <p>Price: {price}</p>
                <p>Created at: { moment(createdAt).format('MMMM Do YYYY, h:mm:ss a') }</p>
                <p>Updated at: { moment(updatedAt).format('MMMM Do YYYY, h:mm:ss a') }</p>
            </div>
        );
    }
}

module.exports = connect(
    (state) => ({
        item: state.item
    })
)(ItemDetail);