getSoundcloudEmbed = function(url) {
	var embedLink = {};
	var scApiKey = '9999309763ba9d5f60b28660a5813440';

	try {
		var result = Meteor.http.get("http://soundcloud.com/oembed", 
		{
	      params: {
	        url: url,
	        format: 'json'
	      }
	    });
	    console.log("result of call is "+result.data.html);
	    var html = String(result.data.html);
	    //split on 'src=' to get the actual url
	    var src = html.split('src="');
	    console.log(src);
	    src = src[1].split('"');
	    console.log(src);
	    //return the link with apended param visual for oldschool thumbnail widget
	    var clean = src[0].replace("visual=true", "visual=false");
	    console.log("cleaned "+clean);
	    return clean;

	} catch (error) {
		console.log(error);
		return null;
	}
}

var addSCMediaAfterSubmit = function (post) {
  var set = {};
  if(post.url){
    var data = getSoundcloudEmbed(post.url);
    if (data) {
      if (!post.embedLink && !!data) {
        post.embedLink = data;
        set.embedLink = data;
      }
    }
    // make sure set object is not empty (Embedly call could have failed)
    if(!_.isEmpty(set)) {
      Posts.update(post._id, {$set: set});
    }
  }
  return post;
}
postAfterSubmitMethodCallbacks.push(addSCMediaAfterSubmit);