var React = require("react");

var Photos = React.createClass({
    render: function () {

        var images = [
            {original: "https://placekitten.com/g/201/301", originalClass: 'featured-slide',
            },
            {original: "https://placekitten.com/g/202/301"},
            {original: "https://placekitten.com/g/203/301"},
            {original: "https://placekitten.com/g/204/301"},
            {original: "https://placekitten.com/g/205/301"},
            {original: "https://placekitten.com/g/206/301"},
            {original: "https://placekitten.com/g/207/301"},
            {original: "https://placekitten.com/g/208/301"},
            {original: "https://placekitten.com/g/209/301"},
            {original: "https://placekitten.com/g/210/301"},
            {original: "https://placekitten.com/g/211/301"},
        ];

        return (
            <div>
                <div className="navButtons"><a href="#news">NEWS</a> <a href="#photos">PHOTOS</a></div>

                <div className="row panel pane-body imageGallery">
                    {images.map((image, index) => {
                        return <div key={`${index}_image`} className="col-xs-6 col-sm-4 col-md-3 thumb"><a className="thumbnail" href=""><img
                            src={image.original} alt="" className="img-responsive"/></a></div>
                    })}
                </div>
            </div>
        )
    }
});

module.exports = Photos;