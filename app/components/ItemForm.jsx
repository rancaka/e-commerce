var React  = require('react');
var { connect } = require('react-redux');

var { createItem, updateItem } = require ('../actions');

class ItemForm extends React.Component {

    constructor(){
        super();

        this.state = {
            cover: '',
            images: [],
            warningMessage: ''
        };
        this.setCover = this.setCover.bind(this);
        this.chooseImage = this.chooseImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setCover(image){
        return () => {
            this.setState({
                cover: image
            });
        }
    }

    chooseImage(e){
        var images = e.target.files;

        if (images.length > 4) {
            this.setState({ warningMessage: `You choose ${images.length} files. Only 4 files allowed!`});
        }

        for (var i=0; i<4; i++) {
            if (images[i].type.match('image.*')) {
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.setState({
                        images: this.state.images.concat(e.target.result)
                    });
                    console.log(this.state.images);
                };

                reader.readAsDataURL(images[i]);
            }
        }
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
        var { cover, images, warningMessage } = this.state;

        var renderImages = () => (
            images.map((image, index) => (
                <div className="col-sm-3" key={index}>
                    <img src={image} className="img-responsive" />
                    <button onClick={this.setCover(image)} className="btn btn-success">Cover</button>
                </div>
            ))
        );

        return (
            <div className="row">
                <div className="col-sm-offset-2 col-sm-4">
                    <img className="img-responsive" src={cover}/>
                </div>
                <div className="col-sm-4">
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
                        <div className="form-group">
                            <input onChange={ this.chooseImage } type="file" multiple max="4"/>
                            <p>{warningMessage}</p>
                            <div className="row">
                                { renderImages() }
                            </div>
                        </div>
                        <button className="btn btn-primary form-control">{ type }</button>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = connect()(ItemForm);