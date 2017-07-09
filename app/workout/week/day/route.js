import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('day', params.day_id);
  },
  renderTemplate(){
    this.render('workout.week.day', {
      into: 'application',
      outlet: 'main'
    });
  }
});
