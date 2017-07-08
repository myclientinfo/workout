import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  showWeight: DS.attr('boolean'),
  target: DS.attr('string'),
  video: DS.attr('string')
});
