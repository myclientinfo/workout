import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    toggleEditing: function(current){
      this.set('isEditing', !current);
    },
    saveWorkout: function(workout){

      //let setRecords = this.get('workout.setRecords');
      //setRecords.forEach(function(set){
      //  set.save();
      //});
      //this.set('workout.isComplete', true);
      //this.sendAction('action', this.get('workout'));
      Ember.set(workout, 'isComplete', true);
      //workout.set('isComplete', true);
      this.set('isEditing', false);
      this.attrs.saveAction(workout);

    }
  }
});
