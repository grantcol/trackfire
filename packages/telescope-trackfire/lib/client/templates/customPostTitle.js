//customPostTitle.js
Meteor.startup(function () {

  /*Template[getTemplate('customPostTitle')].onRendered(function() {
  	
      SC.oEmbed("http://soundcloud.com/forss/flickermood", {auto_play: true}, function(oembed){
      	scIframe = oembed.html;
    	console.log("oEmbed response: ", scIframe);
    	Session.set("scIframe", oembed.html);
  	  });
  });*/

  Template[getTemplate('customPostTitle')].helpers({
    name: function () {
      //var scIframe = "hey";
      //Session.set("scIframe", scIframe);
  	  return Session.get("scIframe");
    }
  });

});