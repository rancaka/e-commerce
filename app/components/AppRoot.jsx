var React = require('react');
var {Link} = require('react-router');
var { connect } = require('react-redux');

class AppRoot extends React.Component {

    handleClick(){
        alert('cak');
    }

    render(){

        return (
            <div>       
                <h1>Root</h1>
                <Link to="/">Home</Link>
                <Link to="detail">Detail</Link>
                {this.props.children}
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

module.exports = connect()(AppRoot);