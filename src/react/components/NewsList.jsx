var React = require("react");
var NewsListItem = require("./NewsListItem.jsx");

var NewsList = React.createClass({
    render: function () {
        return (
            <li className="newsList">
                <NewsListItem {...this.props}></NewsListItem>
            </li>
        )
    }
});

module.exports = NewsList;