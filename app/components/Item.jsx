var React = require('react');
var ReactDOM = require('react-dom');
var { Link } = require('react-router');
var { connect } = require('react-redux');

var ItemEditForm = require('./ItemEditForm');
var { removeItem } = require('../actions');

class Item extends React.Component {

    constructor(){
        super();
        this.openEditForm = this.openEditForm.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    openEditForm() {
        jQuery(`#${this.props._id}`).modal('show');
    }

    removeItem() {
        var { _id, dispatch } = this.props;
        dispatch(removeItem(_id));
    }

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
                        <button className="btn btn-primary" onClick={ this.openEditForm }>Edit</button>
                        <button className="btn btn-danger" onClick={ this.removeItem }>Delete</button>
                    </div>
                </div>
                <h1>{name}</h1>
                <p>{ price }</p>
                <ItemEditForm {...this.props}/>
            </div>
        );
    }
}

module.exports = connect()(Item);