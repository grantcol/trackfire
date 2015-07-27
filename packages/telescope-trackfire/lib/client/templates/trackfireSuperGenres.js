Meteor.startup(function () {
  Template[getTemplate('superGenres')].helpers({
  arguments: function () {
    var post = Meteor.posts();
    return {
      terms: {
        view: 'superGenres',
        super: post.categories.super
      }
    }
  }
  });
});