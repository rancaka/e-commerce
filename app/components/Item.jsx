var React = require('react');
var { connect } = require('react-redux');
var { Link } = require('react-router');

class Item extends React.Component {
    render(){
        var {_id, name, price} = this.props;

        return (
            <div className="item">
                <h2>{ name }</h2>
                <p>price: { price }</p>
                <Link to={`/${_id}`}>Show</Link>
            </div>
        );
    }
}

module.exports = Item;