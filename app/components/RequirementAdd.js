var React = require('react');
var Actions = require('../actions');


var RequirementAdd = React.createClass({
  render: function () {
    return (
      <div>
        <input
          type="text"
          placeholder="Add Requirement"
          ref="title"
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  },

  handleSave: function () {
    var title = this.refs.title.getDOMNode().value;
    Actions.REQUIREMENT_ADD({
      title: this.refs.title.getDOMNode().value
    });
  }
});


module.exports = RequirementAdd;
