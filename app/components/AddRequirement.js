var React = require('react');
var Actions = require('../actions');


var AddRequirement = React.createClass({
  render: function () {
    return (
      <div>
        <input
          type="text"
          placeholder="Add Requirement"
          ref="title"
        />
        <button
          onClick={this.handleSave}>Save</button>
      </div>
    );
  },

  handleSave: function () {
    Actions.REQUIREMENT_SAVE({
      title: this.refs.title.getDOMNode().value
    });
  }
});


module.exports = AddRequirement;
