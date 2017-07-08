import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string'),
  isComplete: DS.attr('boolean', {defaultValue: false}),
  week: DS.belongsTo('week'),
  workouts: DS.hasMany('workout'),
});
