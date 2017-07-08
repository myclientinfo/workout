import DS from 'ember-data';

export default DS.Model.extend({
  sets: DS.attr('number'),
  reps: DS.attr('number'),
  dropSet: DS.attr('boolean'),
  isComplete: DS.attr('boolean'),
  exercise: DS.belongsTo('exercise'),
  userSets: DS.hasMany('set')
});
