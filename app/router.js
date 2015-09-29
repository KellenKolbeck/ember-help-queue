import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('statistics');
  this.route('other-pair');
  this.route('documenting');
  this.route('help-page');
});

export default Router;
