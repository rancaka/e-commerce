var React = require('react');
var { connect } = require('react-redux');

var { initItems } = require('../actions');
var Item = require('./Item');

class ItemList extends React.Component{

    componentDidMount(){
        var { dispatch } = this.props;
        dispatch(initItems());
    }

    render(){
        var { items } = this.props;
        var renderItems = () => (
            items.map((item) => (
                <Item key={item._id} {...item}/>
            ))
        );

        return (
            <div className="item-list">
                {renderItems()}
            </div>
        );
    }
}

module.exports = connect(
    (state) => ({
        items: state.items
    })
)(ItemList);