var React = require("react");
var NewsList = require("./NewsList.jsx");


var News = React.createClass({
    render: function () {

        var news = [
            {
                id: 1,
                title: "Life found on the moon",
                poster: "http://thehoopla.wpengine.netdna-cdn.com/wp-content/uploads/2012/10/cute-cat-1.jpg",
                pictures: ["http://i.ytimg.com/vi/8Xu26RXFXqA/0.jpg", "http://www.iuforc.com/wp-content/uploads/2014/01/moon-ruinsevidence-of-life1.jpg"],
                story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, adipisci animi asperiores corporis cum doloribus facilis fuga iusto, magni nesciunt, nulla quam quasi ratione suscipit totam vel? Architecto, voluptatibus.",
                location: "The Moon, Universe",
                heading: "NASA finds evidence of life!"
            },
            {
                id: 2,
                title: "Man want's to move to the moon!",
                poster: "http://www.dailycuteness.com/wp-content/uploads/2012/03/cute-kitty-frog2.jpg",
                pictures: ["http://imalbum.aufeminin.com/album/D20061123/240590_Y3FYOL553O5OB6Q2X4I4VX2N6QYB2Q_1623_H135344_L.jpg", "https://thebsreport.files.wordpress.com/2010/02/funny-marriage.jpg"],
                story: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, adipisci animi asperiores corporis cum doloribus facilis fuga iusto, magni nesciunt, nulla quam quasi ratione suscipit totam vel? Architecto, voluptatibus.",
                location: "The Moon, Universe",
                heading: "Wife makes man want to move to moon!"
            }
        ];
        return (
            <div>
                <ul>
                    <div className="navButtons"><a href="#news">NEWS</a> <a href="#photos">PHOTOS</a></div>
                    {news.map((newsItem) => {
                        return <NewsList key={newsItem.id} title={newsItem.title} poster={newsItem.poster} pictures={newsItem.pictures} heading={newsItem.heading} story={newsItem.story} location={newsItem.location} />
                    })}
                </ul>
            </div>
        )
    }
});

module.exports = News;