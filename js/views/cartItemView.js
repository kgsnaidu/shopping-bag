define([
    'jquery',
    'backbone',
    'underscore',
    'cartItemOverlayView',
    './text!../templates/cartItem.html'
], function ($, Backbone, _, CartItemOverlayView, cartItemTemplate) {
    var cartItemView = Backbone.View.extend({
        tagName: "li",
        className: "cart-item row",
        template: _.template(cartItemTemplate),
        initialize: function () {},
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
        events: {
            'click .button-remove': 'delete',
            'click .button-edit': 'edit',
            'focusout .input-qty': 'updateQty'
        },
        delete: function () {
            this.model.destroy();
        },
        edit: function () {
            var itemOverlay = new CartItemOverlayView({
                model: this.model
            });
            itemOverlay.render();
        },
        updateQty: function (e) {
            var qty = e.target.value;
            qty = ((qty<0) ? '0' : qty);
            this.model.set({p_quantity : qty});
        }
    });

    return cartItemView;
});