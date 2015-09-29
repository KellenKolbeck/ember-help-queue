import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('help-ticket');
  },

  actions: {
    deleteTicket() {
      currentTicket.destroyRecord();
      this.transitionTo('ticket-window');
    }
  }
});
