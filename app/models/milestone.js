import DS from 'ember-data';

export default DS.Model.extend({
  workout: DS.belongsTo('workout'),
  day: DS.belongsTo('day'),
  week: DS.belongsTo('week'),
  completed: DS.attr('date')
});
// localStorage persisted user data - not created in initializer