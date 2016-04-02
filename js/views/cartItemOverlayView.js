define([
    'jquery',
    'backbone',
    'underscore',
    'bootstrap',
    './text!../templates/cartItemOverlay.html'
], function ($, Backbone, _, bootstrap, overlayTemplate) {
    var cartItemOverlayView = Backbone.View.extend({
        tagName: "div",
        className: "modal fade",
        template: _.template(overlayTemplate),
        initialize: function () {
            this.$el.on('hidden.bs.modal', this.remove.bind(this));
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$el.modal('show');
        },
        events: {
            'click #button-edit-item': 'edit'
        },
        edit: function () {
            var qty = $("#item-modal-qty").val(),
                size = { 
                    name: $("#item-modal-size option:selected").val(),
                    code: $("#item-modal-size option:selected").text()
                };
            qty = ((qty<0) ? '0' : qty);
            this.model.set({p_quantity : qty, p_selected_size: size});
            this.$el.modal('hide');
        }
    });

    return cartItemOverlayView;
});