import DS from 'ember-data';

export default DS.Model.extend({
  set: DS.attr('number'),
  weight: DS.attr('number'),
  reps: DS.attr('number'),
  workout: DS.belongsTo('workout'),
  day: DS.belongsTo('day')
});
// localStorage persisted user data - not created in initializer