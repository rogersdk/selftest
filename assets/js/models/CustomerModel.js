define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
 
    var Customer = Backbone.Model.extend({
    	initialize: function(){
			console.log("Customer Model loaded.")
		},		
		defaults: function(){
			imagePath:"assets/uploads/customer/"
		},

		name:"Hot & Dog Caianas",
		address:"Rua Jornalista Marcia Mendes, 36",
		zipCode: "58055-530",
		phone: "(83)3238-2606",
		
		profilePicture:"",

		description:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica."
    });
    
    return Customer;
    
});