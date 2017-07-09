import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveWorkout(workout){
      workout.get('userSets').forEach(function(set){
        set.save();
      });
    }
  }
});
