Template[getTemplate('logo')].helpers({
  site_title: function(){
    return Settings.get('title', "TrackFire");
  },
  logo_url: function(){
    return Settings.get('logoUrl');
  }
});
