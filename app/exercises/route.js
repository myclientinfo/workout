import Ember from 'ember';
import exercises from 'workout/data/exercises';

export default Ember.Route.extend({
  model(){
    return exercises;
  }
});
