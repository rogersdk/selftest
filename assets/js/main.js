require.config({
  paths: {
    jquery: 'libs/jquery/jquery-1.11.1.min',
    underscore: 'libs/underscore/underscore',
    backbone: 'libs/backbone/backbone',
    bootstrap: 'libs/bootstrap/boostrap',
    dropdown: 'libs/bootstrap/dropdown',
    text: 'libs/require/text',
    templates: '../templates'
  },
  urlArgs: {'bust': Date.now()}


});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
    console.log("App Initialized");
});