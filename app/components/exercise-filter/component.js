import Ember from 'ember';

export default Ember.Component.extend({
  filteredExercises: null,
  postFilteredExercises: null,
  isChest: function(){
        return this.filtersApplied.indexOf('Chest') > -1;
      }.property('filtersApplied.@each'),
  isArms: function(){
    return this.filtersApplied.indexOf('Arms') > -1;
  }.property('filtersApplied.@each'),
  isBack: function(){
    return this.filtersApplied.indexOf('Back') > -1;
  }.property('filtersApplied.@each'),
  isLegs: function(){
    return this.filtersApplied.indexOf('Legs') > -1;
  }.property('filtersApplied.@each'),
  filtersApplied: [],
  actions: {
    applyFilter(newFilter){
      var filterPosition = this.filtersApplied.indexOf(newFilter);
      if(filterPosition === -1 ){
        this.filtersApplied.pushObject(newFilter);
      } else {
        this.filtersApplied.removeAt(filterPosition, 1);
      }

      var postFilteredExercises = this.filteredExercises.filter(function(item){

        var targetIndex = this.filtersApplied.indexOf(item.target);
        return targetIndex > -1;
      }, this);

      this.set('postFilteredExercises', postFilteredExercises);
    }
  },
  didInsertElement: function(){
    this.send('applyFilter', 'Chest');
  }
});
