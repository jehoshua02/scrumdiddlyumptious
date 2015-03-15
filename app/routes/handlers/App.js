var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var RequirementForm = require('app/components/RequirementForm');


var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>App</h1>
        <RequirementForm />
        <RouteHandler />
      </div>
    );
  }
});


module.exports = App;
