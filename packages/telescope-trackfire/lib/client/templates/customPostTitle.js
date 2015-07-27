//customPostTitle.js
Meteor.startup(function () {

  Template[getTemplate('customPostTitle')].helpers({
    embed: function () {
  	  return 'https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1453396&show_artwork=true';
    }
  });

});