var Reflux = require('reflux');
var Actions = require('../actions');
var State = require('./mixins/State');


var RequirementStore = Reflux.createStore({
  mixins: [State],

  getInitialState: function () {
    return {
      requirements: []
    };
  },

  listenables: {
    save: Actions.REQUIREMENT_SAVE
  },

  onSave: function (requirement) {
    this.setState({
      requirements: this.state.requirements.concat(requirement)
    });
  }
});


module.exports = RequirementStore;
