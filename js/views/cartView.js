define([
    'jquery',
    'backbone',
    'underscore',
    'cartItemView',
    'checkOutView',
    './text!../templates/cart.html'
], function ($, Backbone, _, cartItemView, checkOutView, cartPage) {
    'use strict'
    var checkOut;
    var cartPageView = Backbone.View.extend({

        template: _.template(cartPage),

        initialize: function () {
            this.collection.on("remove", this.render, this);
            this.collection.on("update", this.render, this);
            checkOut = new checkOutView({el: '#cost-calculation'});
        },

        render: function () {
            var variables = {
                noOfItems: this.collection.length
            };
            var collectionArray = this.collection.toArray(),
                totalCost = this.sum(collectionArray);
            this.$el.html(this.template(variables));
            this.addAll();
            
            checkOut.render(totalCost);
        },
        
        sum: function (array) {
            var sum = 0;
            array.forEach(function(item){
                var price = item.get('p_price')*item.get('p_quantity');
                sum += price
            });
            return sum;
        },

        addAll: function () {
            this.collection.forEach(this.addOne, this);
        },

        addOne: function (itemModel) {
            var itemView = new cartItemView({
                model: itemModel
            });
            itemView.render();
            itemModel.on("destroy", this.modelRemoved, this);
            itemModel.on("change", function () {
                this.collection.trigger("update");
            }, this);
            $('#cart-items-table').append(itemView.el);
        },
        modelRemoved: function (e) {
            this.collection.remove(e.Model);
        }

    });

    return cartPageView;
})