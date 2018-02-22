jQuery( function ( $ ) {

/*
        <audio id="audio" autoplay="autoplay" loop="true" controls="true" preload="none">
            <source src="./assets/audio/music.mp3" />
        </audio>
*/
    $( '<audio />', {
        'autoplay' : 'autoplay',
        'loop'     : 'true',
        'controls' : 'false',
        'preload'  : 'none',
        'style'    : 'display:none;',
        'html'     : $( '<source />', { 'src': './assets/audio/music.mp3' } )
    } ).appendTo( $( 'body' ) );

    $( 'span.audio_box' ).on( 'click', function () {

        var $target = $( 'audio' )[ 0 ];

        if ( $target.paused ) {

            $target.play();
            $( this ).css( 'opacity', '.5' );

        } else {

            $target.pause();
            $( this ).css( 'opacity', '.3' );

        }

    } );


    var arr_symbol = [ '&#9728;', '&#8277;', '&#9733;', '&#9794;' ];
    var symbol     = arr_symbol[ parseInt( Math.random() * 10 ) % arr_symbol.length ];

    setInterval( function () {

        var options           = { minSize: 10, maxSize: 20, color: '#ddd' };
        var startPositionLeft = Math.random() * $( document ).width();
        var startOpacity      = 0.5 + Math.random();
        var sizeFlake         = options.minSize + Math.random() * options.maxSize;
        var endPositionTop    = $( document ).height() - 40;
        var endPositionLeft   = startPositionLeft - 100 + Math.random() * 200;
        var durationFall      = $( document ).height() * 10 + Math.random() * 10000;
        var $flake            = $('<span />', { class: 'flake', style: 'display:block;position:absolute;top:0px;', html: symbol } );

        $flake.appendTo('body');
        $flake.css( { left: startPositionLeft, opacity: startOpacity, 'font-size': sizeFlake, color: options.color } )
        $flake.animate( { top: endPositionTop, left: endPositionLeft, opacity: 0.5 }, durationFall, 'linear', function () { $( this ).remove(); } );

    }, 1000 );

} );