Meteor.startup(function () {
  Template[getTemplate('trackfireCategoryList')].helpers({
    categoriesArray: function(){
      return Categories.find({parent : 'root'}, {sort: {order: 1, name: 1}});
    },
    trackfireCategoryItem: function () {
      return getTemplate('trackfireCategoryItem');
    }
  });
});