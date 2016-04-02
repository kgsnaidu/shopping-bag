define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {
    var cartItem = Backbone.Model.extend({
        
        update: function (obj) {
            this.set(obj);
        }
    });

    return cartItem;
});