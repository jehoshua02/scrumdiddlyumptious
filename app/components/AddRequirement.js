var React = require('react');
var Actions = require('../actions');
var Store = require('../stores/RequirementStore');


var AddRequirement = React.createClass({
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
    Store.listen(function (state) {
      console.log('hello', state);
    });
    Actions.REQUIREMENT_SAVE({
      title: this.refs.title.getDOMNode().value
    });
  }
});


module.exports = AddRequirement;
