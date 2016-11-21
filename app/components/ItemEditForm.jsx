var React = require('react');

var ItemForm = require('./ItemForm');

class ItemEditForm extends React.Component {

    render(){
        var {_id, name } = this.props;
        return (
            <div id={_id} className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Edit {name}</h4>
                        </div>
                        <div className="modal-body">
                            <ItemForm type="Update" {...this.props} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = ItemEditForm;