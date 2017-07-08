import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.get('store').find('week', params.week_id);
  },
  renderTemplate(controller, model){
    this.render('workout.week', {
      into: 'application',
      outlet: 'main'
    });
  }
});