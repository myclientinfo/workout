import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('exercises', function() {
    this.route('show');
  });
  this.route('weeks', function() {
    this.route('show', {path: ':id'});
  });
  this.route('days', function() {
    this.route('show', {path: ':id'});
  });
  this.route('settings');
  this.route('sets');

  this.route('workout');
  this.route('milestone');
});

export default Router;
