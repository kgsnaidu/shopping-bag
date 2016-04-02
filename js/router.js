define([
    "jquery",
    "underscore",
    "backbone",
    "cartItem",
    "cartItems",
    "cartView"
], function ($, _, Backbone, CartItem, CartItems, CartView) {
    "use strict"
    var cartView, cartItemsView, cartItems;
    var Router = Backbone.Router.extend({
        routes: {
            "": "cartPage",
            "registration": "startRegistration",
            "tryagain": "startRegistration"
        },
        initialize: function () {
            cartItems = new CartItems({
                model: new CartItem()
            });
            cartView = new CartView({
                el: "#cart-items",
                collection: cartItems
            });
        },
        cartPage: function () {
            cartItems.fetch({
                success: function () {
                    cartView.render();
                }
            });
        },
        start: function () {
            Backbone.history.start();
        }
    });
    return Router;
});