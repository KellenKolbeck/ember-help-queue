import Ember from 'ember';

export default Ember.Component.extend({
  newTicketForm: true,

  actions: {
    ticketFormHide() {
      this.set("newTicketForm", false);
    },

    createTicket() {
      var params = {
        name: this.get('name'),
        body: this.get('body')
      }
      this.sendAction("createTicket");
      this.set("newTicketForm", false);
    },

    deleteTicket() {
      this.sendAction("deleteTicket");
    }
  }
});
