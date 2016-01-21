var React = require("react");

var NewsItem = React.createClass({
    render: function () {
        console.log(this.props.pictures)
        return (
            <div className="newsListItem">
                <div className="row">
                    <div className="col-sm-3">
                        <img className="userPic" src={this.props.poster} alt="posterIcon" width="100px"/>
                    </div>
                    <div className="col-sm-9">
                        <h1 className="newsTitle">{this.props.title}</h1>
                        <h3>{this.props.heading}</h3>
                        <p>{this.props.story}</p>
                        <ul className="newsImgs">{this.props.pictures.map((picture) => {
                            return <li><img className="newsPics" src={picture} alt="" width="100px"/></li>
                        })}</ul>
                        <p>{this.props.location}</p>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = NewsItem;