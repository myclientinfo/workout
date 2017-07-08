import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveWorkout(workout, day){
      console.log(workout);
      console.log(workout.setRecords);
      workout.setRecords.forEach(function(set){
        console.log(set.reps);
        console.log(set.reps + ' @ ' + set.weight);

      });
      return false;



      let day_id = +this.paramsFor('day').day_id;
      //let day = Ember.Object.create(days[day_id - 1]);
      let milestones = this.get('store').all('milestone');
      let expectedWorkouts = workouts.filterBy('group', day.group).get('length');

      let currentWorkoutMilestone = milestones.filterBy('workout_id', workout.id);

      if(currentWorkoutMilestone.get('length')===0){
        let newWorkoutMilestone = {workout_id: workout.id, day_id: day_id, week_id: day.week, completed: new Date()};
        currentWorkoutMilestone = this.get('store').createRecord('milestone', newWorkoutMilestone);
        currentWorkoutMilestone.save();
      }

      let dayMilestone = this.get('store').all('milestone').filter(function(item){
        return item.get('day_id') === this.id && item.get('workout_id') === 0;
      }, day);

      var dayWorkoutMilestones = this.get('store').all('milestone').filter(function(item){
        return item.get('day_id') === this.id && item.get('workout_id') !== 0;
      }, day);

      dayWorkoutMilestones.get('length');
      
      if( dayMilestone.get('length') === 0 && 
        expectedWorkouts === dayWorkoutMilestones.get('length')){
        let newDayMilestone = {
          workout_id: 0, 
          day_id: day_id, 
          week_id: day.week, 
          completed: new Date()
        };
        this.store.createRecord('milestone', newDayMilestone).save();
      }

    }
  }
});
