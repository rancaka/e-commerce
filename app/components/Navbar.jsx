var React = require('react');
var { Link } = require('react-router');

class Navbar extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Brand</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Navbar;