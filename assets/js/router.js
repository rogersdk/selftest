define([
    'jquery',
    'underscore',
    'backbone',
    'views/header/HeaderView',
    'views/footer/FooterView',
    'views/autenticacao/FormLogin',
    'views/home/HomeView'
], function($, _, Backbone, HeaderView, FooterView, FormLogin, HomeView) {
    
    var app = {name:'SelfCerva'};
    var footerView = new FooterView();
    var headerView = new HeaderView(); 
    var formLogin = new FormLogin();

    var AppRouter = Backbone.Router.extend({
        routes:{
            '':             'home',
            'books':        'books',
            'search':       'search',
            'autenticar':   'autenticar'
        }
    });
    var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:home', function(){
        var homeView = new HomeView();
        homeView.render();
    });
    app_router.on('route:books', function(){
        console.log("Book's page Okay. ;)~");
    });

    app_router.on('route:search', function(){
        console.log("Search's page Okay. ;)~");
    });

    app_router.on('route:autenticar', function(){
        console.log("Autenticar's page Okay. ;)~");
        formLogin.render();
    });
        /*
    app_router.on('route:showLibs', function(){
        console.log('Showing libs');
    });
    */
/*        
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
  });
  */      
/*
    app_router.on('route:showProjects', function(){
   
        // Call render on the module we loaded in via the dependency array
        var projectsView = new ProjectsView();
        projectsView.render();

    });
*/

/*
    app_router.on('route:showContributors', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var contributorsView = new ContributorsView();
    });
*/
/*
    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });
*/ 
    headerView.render();
    footerView.render();
    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    Backbone.history.start({        
    });
  };
  return { 
    initialize: initialize
  };
});