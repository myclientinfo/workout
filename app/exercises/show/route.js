import Ember from 'ember';
import exercises from 'workout/data/exercises';

export default Ember.Route.extend({
  model(params){
    return exercises.findBy('id', +params.id);
  },
  actions: {
    gotBack(){
      history.back();
    }
  },
  renderTemplate(){
    this.render('exercises.show', {
      into: 'application',
      outlet: 'main'
    });
  }
});
