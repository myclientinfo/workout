import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('exercises', function() {
    this.route('show', {path: ':id'});
  });
  //this.route('weeks', function() {
  //  this.route('show', {path: ':id'});
  //});
  this.route('workout', function() {
    this.route('week', {path: ':week_id'}, function() {
      this.route('day', {path: ':day_id'});
    });
  });
  this.route('milestone', {path: 'milestones'});
  this.route('settings');
});

export default Router;
