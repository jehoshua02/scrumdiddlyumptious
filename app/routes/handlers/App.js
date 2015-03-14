var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
// var AddRequirement = require('../../components/AddRequirement');


var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler />
      </div>
    );
  }
});


module.exports = App;
