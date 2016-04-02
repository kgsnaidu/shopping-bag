define([
    "jquery",
    "underscore",
    "backbone"
], function ($, _, Backbone) {
    var cartItems = Backbone.Collection.extend({
        url: "https://api.myjson.com/bins/19ynm&callback=callbackFN",
        parse: function (response) {
            return response.productsInCart;
        }
    });

    return cartItems;
});