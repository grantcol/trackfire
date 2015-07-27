Meteor.startup(function () {
  Template[getTemplate('trackfireSubCategoryList')].helpers({
    categoriesArray: function(){
    	var slug = Router.current().location.get().path;
    	if(slug == '/category/hip-hop')
      		return Categories.find({parent : 'Hip Hop'}, {sort: {order: 1, name: 1}});
      	else if(slug == '/category/edm')
      		return Categories.find({parent : 'EDM'}, {sort: {order: 1, name: 1}});
      	else if(slug == '/category/indie')
      		return Categories.find({parent : 'Indie'}, {sort: {order: 1, name: 1}});
      	return "NONE";
    },
    trackfireCategoryItem: function () {
      return getTemplate('trackfireCategoryItem');
    },
    isSuperCategoryPage: function() {
    	//console.log(Router.current().location.get().path);
    	var slug = Router.current().location.get().path;
    	if(slug == '/category/hip-hop') return true;
    	else if(slug == '/category/edm') return true;
    	else if(slug == '/category/indie') return true;
    	return false;
		//return this.slug == 'hip-hop' | this.slug == 'edm' | this.slug == 'indie';
	}
  });
});