import Ember from 'ember';

var currentTicket;
export default Ember.Route.extend({
  model() {
    return this.store.findAll('help-ticket');
  },


  actions: {
    createTicket(params) {
      var newTicket = this.store.createRecord('help-ticket', params);
      newTicket.save();
      currentTicket = newTicket;
    },

    deleteTicket() {
      currentTicket.destroyRecord();
      this.transitionTo('index');
    }
  }
});
