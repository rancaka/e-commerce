var React  = require('react');
var { connect } = require('react-redux');

var { createItem, updateItem } = require ('../actions');

class ItemForm extends React.Component {

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var {_id, name, price, dispatch } = this.props;

        if (this.name.value.length > 0 && this.price.value.length > 0) {
            let item = {
                _id: null || _id,
                name: this.name.value || name,
                price: this.price.value || price
            };

            switch (this.props.type) {
                case 'Create':
                    dispatch(createItem(item));
                    this.name.value = '';
                    this.price.value = '';
                    break;
                case 'Update':
                    dispatch(updateItem(item));
                    jQuery(`#${_id}`).modal('hide');
                    break;
                default:
                    break;
            }
        }
    }

    render(){
        var {name, price, type} = this.props;

        return (
            <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label style={{width: '100%'}}>
                                Name:
                                <input ref={name => this.name = name} type="text" defaultValue={name} placeholder="Enter item's name..." className="form-control"/>
                            </label>
                        </div>
                        <div className="form-group">
                            <label style={{width: '100%'}}>
                                Price:
                                <input ref={price => this.price = price} type="number" defaultValue={price} placeholder="Enter item's price..." className="form-control"/>
                            </label>
                        </div>
                        <button className="btn btn-primary form-control">{ type }</button>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = connect()(ItemForm);