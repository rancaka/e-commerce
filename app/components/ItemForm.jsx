var React  = require('react');
var { connect } = require('react-redux');

var { createItem } = require ('../actions');

class ItemForm extends React.Component {

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var { dispatch } = this.props;

        if (this.name.value.length > 0 && this.price.value.length > 0) {
            let item = {
                name: this.name.value,
                price: this.price.value
            };
            dispatch(createItem(item));
            this.name.value = '';
            this.price.value = ''
        }
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input ref={name => this.name = name} type="text" placeholder="Enter item's name..." className="form-control" id="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input ref={price => this.price = price} type="number" placeholder="Enter item's price..." className="form-control" id="price"/>
                        </div>
                        <button className="btn btn-primary form-control">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = connect()(ItemForm);