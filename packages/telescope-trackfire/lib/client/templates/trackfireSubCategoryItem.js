Meteor.startup(function () {
  Template[getTemplate('trackfireSubCategoryItem')].helpers({
    categoryLink: function(){
      return getSiteUrl()+'category/'+this.slug;
    },
  });
});