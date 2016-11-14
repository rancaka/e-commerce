var React = require('react');
var { connect } = require('react-redux');
var { Link } = require('react-router');

class Item extends React.Component {
    render(){
        var {_id, name, price, picUrl} = this.props;

        return (
            <div className="item">
                <div className="item-image">
                    <img className="img-responsive" src={picUrl} />
                    <div className="item-cover">
                        <h1>{name}</h1>
                        <p>{ price }</p>
                        <Link to={`/${_id}`} className="btn btn-success">Detail</Link>
                    </div>
                </div>
                <h1>{name}</h1>
                <p>{ price }</p>
            </div>
        );
    }
}

module.exports = Item;