// ------------------------------------------------------------------------------------------- //
// -------------------------------------- Subscriptions -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

// add a subscription to be preloaded before the rest of the app
preloadSubscriptions.push('customPublication');

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------- Nav ------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

// add templates to the primary nav bar  
primaryNav.push({
  template: 'customNav',
  order: 99
});

// add templates to the secondary nav bar
secondaryNav.push({
  template: 'customNav',
  order: 99
});

// add items to the view menu
/*viewsMenu.push({
  route: 'hip-hop',
  label: 'Hip-Hop',
  description: '' // optional
});

// add items to the view menu
viewsMenu.push({
  route: 'electronic',
  label: 'Electronic',
  description: '' // optional
});

// add items to the view menu
viewsMenu.push({
  route: 'dubstep',
  label: 'Dubstep',
  description: '' // optional
});

// add items to the view menu
viewsMenu.push({
  route: 'house',
  label: 'House',
  description: '' // optional
});

// add items to the view menu
viewsMenu.push({
  route: 'trap',
  label: 'Trap',
  description: '' // optional
});

// add items to the view menu
viewsMenu.push({
  route: 'edm-dance',
  label: 'EDM/Dance',
  description: '' // optional
});

viewsMenu.push({
  route: 'nudisco',
  label: 'Nu Disco',
  description: '' // optional
});

viewParameters.house = function () {
  return {
    options: {sort: {postGenre: 'house'}}
  };
}*/
// ------------------------------------------------------------------------------------------- //
// ------------------------------------------ Zones ------------------------------------------ //
// ------------------------------------------------------------------------------------------- //

// add templates to the hero zone (before posts list)
heroModules.push({
  template: 'trackfireCategoryList',
  order: 1
});

heroModules.push({
  template: 'trackfireSubCategoryList',
  order: 2
});
  
// add templates to the footer (after posts list)
footerModules.push({
  template: 'customFooter',
  order: 99
});

// ------------------------------------------------------------------------------------------- //
// ------------------------------------------ Posts ------------------------------------------ //
// ------------------------------------------------------------------------------------------- //

// add templates to the post items
postModules.push({
  template: 'customModule',
  order: 99
});

// add templates to the post heading zone
postHeading.push({
  template: 'customHeading',
  order: 99
});

// add templates to the post meta zone
postMeta.push({
  template: 'customMeta',
  order: 99 
});

// ------------------------------------------------------------------------------------------- //
// -------------------------------------- User Profiles -------------------------------------- //
// ------------------------------------------------------------------------------------------- //

userProfileDisplay.push({
  template: 'customTemplate',
  order: 99 
});

userProfileEdit.push({
  template: 'customTemplate',
  order: 99 
});