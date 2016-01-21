var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var useRouterHistory = ReactRouter.useRouterHistory;
var history = require("history");
var createHashHistory = history.createHashHistory;
var appHistory = useRouterHistory(createHashHistory)({queryKey: false})

//Create our own history. Will be used to get rid of query keys.


var Home = require("./components/Home.jsx");
var News = require("./components/News.jsx");
var Photos = require("./components/Photos.jsx");

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Home}>
            <Route path="/news" component={News}></Route>
            <Route path="/photos" component={Photos}></Route>
        </Route>
    </Router>
);

module.exports = Routes;