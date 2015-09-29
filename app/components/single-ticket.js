import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    deleteTicket() {
      this.sendAction("deleteTicket");
      
    }
  }
});
