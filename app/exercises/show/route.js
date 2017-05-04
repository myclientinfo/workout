import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return exercises.findBy('id', +params.id);
  },
  actions: {
    gotBack(){
      history.back();
    }
  }
});
