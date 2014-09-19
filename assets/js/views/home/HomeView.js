$(function(){
    define([
        'jquery',
        'underscore',
        'backbone',
        'models/CustomerModel',
        'text!templates/home/homeTemplate.html'
    ], function($, _, Backbone, Customer, homeTemplate){
        var HomeView = Backbone.View.extend({
            el: $("#conteudo"),
            initialize: function() {
                console.log("HomeView Init");
            },
            
            render: function(){
                var compiledTemplate = _.template( homeTemplate );
                this.$el.html(compiledTemplate);
                return this;
            }
        });
        
        return HomeView;
    });
});