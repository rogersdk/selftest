define([
    'jquery',
    'underscore',
    'backbone',
    'dropdown',
    'text!templates/header/headerTemplate.html'
], function($, _, Backbone, Dropdown, headerTemplate){
    var HeaderView = Backbone.View.extend({
        el: $("#header"),
        initialize: function() {
            console.log("HeaderView Init");
        },
        
        render: function(){
            var user = {name:'Roger'};
            var data = {
                user:{name:'Roger'}
            };
            var compiledTemplate = _.template( headerTemplate );
            this.$el.html(compiledTemplate);
        }
    });
    
    return HeaderView;
});