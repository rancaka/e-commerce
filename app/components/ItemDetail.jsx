var React = require('react');
var { connect } = require('react-redux');

var { initItem } = require('../actions');

class ItemDetail extends React.Component {

    componentDidMount(){
        var { dispatch, routeParams} = this.props;
        dispatch(initItem(routeParams._id));
    }

    render(){
        var {_id, name, price} = this.props.item;

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