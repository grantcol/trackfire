Meteor.startup(function () {
  Template[getTemplate('trackfireCategoryItem')].helpers({
    categoryLink: function(){
      return getSiteUrl()+'category/'+this.slug;
    },
  });
});