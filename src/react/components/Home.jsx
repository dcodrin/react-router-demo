var React = require("react");

var Home = React.createClass({
    render: function () {
        return (
            <div className="app">
                <div className="row header">
                    <div className="col-xs-5 col-xs-offset-1 col-sm-5 col-sm-offset-1 headerTitle">
                        <h1>Country News</h1>
                        <p>Top stories on the Moon.</p>
                    </div>
                    <div className="col-xs-5 col-sm-5 links">
                        <ul className="linkIcons">
                            <li><a href="#"><i className="fa fa-facebook fa-2x"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin fa-2x"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram fa-2x"></i></a></li>
                            <li><a href="#"><i className="fa fa-envelope fa-2x"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
                <div className="row site-footer">
                    <h1>This is the footer</h1>
                </div>
            </div>
        )
    }
});

module.exports = Home;