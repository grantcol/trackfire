Meteor.startup(function () {

  Template[getTemplate('trackfireContent')].helpers({

  postLink: function(){
    return !!this.embedLink ? this.embedLink : getOutgoingUrl(this.url);
  },
  postTarget: function() {
    return !!this.url ? '_blank' : '';
  }
  
  });

});
