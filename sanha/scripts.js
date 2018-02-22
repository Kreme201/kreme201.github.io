jQuery( function ( $ ) {


    setInterval( function () {

        var options           = { minSize: 10, maxSize: 20, color: '#ddd' };
        var startPositionLeft = Math.random() * $( document ).width() - 100;
        var startOpacity      = 0.5 + Math.random();
        var sizeFlake         = options.minSize + Math.random() * options.maxSize;
        var endPositionTop    = $( document ).height() - 40;
        var endPositionLeft   = startPositionLeft - 100 + Math.random() * 200;
        var durationFall      = $( document ).height() * 10 + Math.random() * 10000;
        var $flake            = $('<span />', { class: 'flake', style: 'display:block;position:absolute;top:-50px;', html: '&lowast;' } );

        $flake.appendTo('body');
        $flake.css( { left: startPositionLeft, opacity: startOpacity, 'font-size': sizeFlake, color: options.color } )
        $flake.animate( { top: endPositionTop, left: endPositionLeft, opacity: 0.5 }, durationFall, 'linear', function () { $( this ).remove(); } );

    }, 500 );


} );