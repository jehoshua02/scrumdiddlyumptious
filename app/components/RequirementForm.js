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
    var title = this.refs.title.getDOMNode().value;
    Actions.REQUIREMENT_SAVE({
      title: this.refs.title.getDOMNode().value
    });
  }
});


module.exports = RequirementForm;
