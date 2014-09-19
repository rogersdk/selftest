define([
    'jquery',
    'underscore',
    'backbone',
    'models/CustomerModel',
    'text!templates/autenticacao/formLogin.html'
], function($, _, Backbone, Customer, FormLogin){
    var FormLoginView = Backbone.View.extend({
        el: $("#conteudo"),
        initialize: function() {
            console.log("FormLoginView Init");
        },

        render: function(){
            var user = JSON.parse('{"name":"Rogério Nóbrega" , "birthDate":"1989-10-26"}');            
            var compiledTemplate = _.template( FormLogin, {variable:'user'} )(user);
            this.$el.html(compiledTemplate);
            return this;
        }
    });
    
    return FormLoginView;
});