// Custom Post Property

var embedLink = {
  propertyName: 'embedLink',
  propertySchema: {
    type: String,                           // property type
    label: 'embedLink',                   // key string used for internationalization
    optional: true,                         // make this property optional
    autoform: {
      editable: true,                       // make this property editable by users
      type: "bootstrap-datetimepicker",     // assign a custom input type
      omit: true                           // set to true to omit field from form entirely
    }
  }
}
addToPostSchema.push(embedLink);

/*var postGenre = {
  propertyName: 'postGenre',
  propertySchema: {
    type: String,                           // property type
    label: 'postGenre',                   // key string used for internationalization
    optional: true,                         // make this property optional
    autoform: {
      editable: true,                       // make this property editable by users
      type: "bootstrap-datetimepicker",     // assign a custom input type
      omit: false                           // set to true to omit field from form entirely
    }
  }
}
addToPostSchema.push(postGenre);*/