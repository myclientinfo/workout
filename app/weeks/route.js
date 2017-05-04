import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    let promises = {
      milestones: this.get('store').findAll('milestone')
    };

    return Ember.RSVP.hash(promises);
  },
  model: function() {
    return weeks.map(this.checkComplete, this);
  },
  checkComplete: function(week){
    let milestones = this.get('store').findAll('milestone');
    let completedDays = milestones.filter(function(item){
      return item.get('week_id') === week.id &&  item.get('workout_id') === 0 && item.get('day_id') !== 0;
    });
    let weekDays = days.filterBy('week', week.id);
    week.isComplete = weekDays.get('length') === completedDays.get('length');
    return week;
  }
});
