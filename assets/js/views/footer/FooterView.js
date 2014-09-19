define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){
    var FooterView = Backbone.View.extend({
        el: $("#footer"),
        initialize: function() {
            console.log("FooterView Init");
        },

        render: function(){
            var compiledTemplate = _.template( footerTemplate );
            this.$el.html(compiledTemplate);
            return this;
        }
    });
    
    return FooterView;
});