define([
    'jquery',
    'backbone',
    'underscore',
    'bootstrap',
    './text!../templates/checkOut.html'
], function ($, Backbone, _, bootstrap, checkOutTemplate) {
    var checkOut = Backbone.View.extend({
        template: _.template(checkOutTemplate),
        render: function(totalCost){
            var finalCost = totalCost-7; //applying promo
            if(finalCost<=0){finalCost=0};
            this.$el.html(this.template({totalPrice: totalCost, finalPrice: finalCost}));
        }
    });
    
    return checkOut;
});