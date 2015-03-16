var React = require('react');
var Actions = require('app/actions');


var RequirementForm = React.createClass({

  render: function () {
    return (
      <div className="requirement-form">
        <input
          className="requirement-form__title"
          ref="title"
          type="text"
          placeholder="Add Requirement"
        />
        <textarea
          className="requirement-form__description"
          ref="description"
        ></textarea>
        <button
          className="requirement-form__save-button"
          onClick={this.handleSave}
        >Save</button>
      </div>
    );
  },

  handleSave: function () {
    var requirement = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.description.getDOMNode().value
    };

    Actions.REQUIREMENT_SAVE(requirement);
  }
});


module.exports = RequirementForm;
