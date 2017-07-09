import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    let promises = {
      milestones: this.get('store').findAll('milestone')
    };
    return Ember.RSVP.hash(promises);
  }
});
