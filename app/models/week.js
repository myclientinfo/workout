import DS from 'ember-data';

export default DS.Model.extend({
  isComplete: DS.attr('boolean', {defaultValue: false}),
  days: DS.hasMany('day')
});
