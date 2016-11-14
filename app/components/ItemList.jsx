var React = require('react');
var { connect } = require('react-redux');

var { getItems } = require('../actions');
var Item = require('./Item');

class ItemList extends React.Component{

    componentDidMount(){
        var { dispatch } = this.props;
        dispatch(getItems());
    }

    render(){
        var { items } = this.props;

        var renderItems = () => (
            items.map((item) => (
                <div className="col-sm-3" key={item._id}>
                    <Item {...item}/>
                </div>    
            ))
        );

        return (
            <div className="item-list row">
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