var Reflux = require('reflux');
var Actions = require('app/actions');
var State = require('app/stores/mixins/State');
var firebase = require('app/util/firebase').child('requirements');


var RequirementStore = Reflux.createStore({
  mixins: [State],

  getInitialState: function () {
    return {
      requirements: []
    };
  },

  listenables: {
    save: Actions.REQUIREMENT_SAVE,
    sync: Actions.REQUIREMENT_SYNC
  },

  init: function () {
    firebase.on('value', Actions.REQUIREMENT_SYNC);
  },

  onSave: function (requirement) {
    firebase.push(requirement);
    console.log(requirement);
    this.setState({
      requirements: this.state.requirements.concat(requirement)
    });
  },

  onSync: function (snapshot) {
    var requirements = snapshot.val();
    if (!requirements) { return; }
    console.log(requirements);
    this.setState({
      requirements: requirements
    });
  }
});


module.exports = RequirementStore;
