import Ember from 'ember';
import exercises from 'workout/data/exercises';

export default Ember.Route.extend({
  model: function(params){
    return exercises.findBy('id', +params.id);
  },
  actions: {
    gotBack(){
      history.back();
    }
  },
  renderTemplate(controller, model){
    this.render('exercises.show', {
      into: 'application',
      outlet: 'main'
    });
  }
});
