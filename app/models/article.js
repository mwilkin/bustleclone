import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  category: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  featured: DS.attr(),
  timestamp: DS.attr()
});
