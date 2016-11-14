var React  = require('react');

class ItemForm extends React.Component {
    render(){
        return (
            <div className="row">
                <div className="col-sm-6">

                </div>
                <div className="col-sm-6">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" placeholder="Enter item's name..." className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="number" placeholder="Enter item's price..." className="form-control"/>
                        </div>
                        <button className="btn btn-primary form-control">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = ItemForm;