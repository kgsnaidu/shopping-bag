(function () {
    require.config({
        paths: {
            //Libraries
            'jquery': './lib/jquery.min',
            'underscore': './lib/underscore-min',
            'backbone': './lib/backbone-min',
            'bootstrap': './lib/bootstrap.min',

            //AMD
            'init': './init',
            'router': './router',
            'templates': '../templates',

            //Models
            'cartItem': './models/cartItem',

            //Collection
            'cartItems': './models/cartItems',

            //Views
            'cartView': './views/cartView',
            'cartItemView': './views/cartItemView',
            'cartItemOverlayView': './views/cartItemOverlayView',
            'checkOutView': './views/checkOutView'


        },
        shim: {
            'jquery': {
                exports: '$'
            },
            'underscore': {
                exports: '_'
            },
            'backbone': {
                deps: ['jquery', 'underscore'],
                exports: 'Backbone'
            },
            'bootstrap': {
                deps: ['jquery', 'underscore', 'backbone'],
                exports: 'bootstrap'
            }
        }
    });

    define(['init'], function (init) {
        init.start();
    });

})();