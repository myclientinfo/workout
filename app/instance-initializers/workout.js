import weeks from 'workout/data/weeks';
import days from 'workout/data/days';
import workouts from 'workout/data/workouts';
import exercises from 'workout/data/exercises';

export function initialize(appInstance) {
  let store = appInstance.lookup('service:store');
  let storeWeek, storeDay, storeWorkout, storeSet;
  let rawSet;
  
  exercises.map(exercise => {
    store.createRecord('exercise', exercise);
  })

  // get the weeks and create it
  weeks.map(week => {
    storeWeek = store.createRecord('week', week);

    // get the days for that week and create them
    days.filter(day => week.day_ids.indexOf(day.id) !== -1)
      .map(day => {
        storeDay = store.createRecord('day', day);
        storeDay.set('week', storeWeek);
        storeWeek.get('days').pushObject(storeDay);

        // get the workouts for that day - data structure has intermediary 
        // "group" abstraction discarded here
        workouts.filter(workout=> workout.group === day.group)
          .map(workout => {
            storeWorkout = store.createRecord('workout', workout);
            storeWorkout.set('exercise', store.peekRecord('exercise', workout.exercise_id));
            
            for (var i = 1; i <= storeWorkout.get('sets'); i++) {
              rawSet = {
                set: i,
                workout: storeWorkout,
                reps: workout.reps
              };
              
              storeSet = store.createRecord('set', rawSet);
              storeWorkout.get('userSets').pushObject(storeSet);
            }

            storeDay.get('workouts').pushObject(storeWorkout);
          });
      });
  });
}

export default {
  name: 'workout',
  initialize
};
