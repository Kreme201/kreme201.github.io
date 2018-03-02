jQuery( function ( $ ) {

    var $audio = $( 'audio' );

    $audio.on( 'playing', function () { $( 'span.audio_box' ).css( 'opacity', '.5' ); } );
    $audio.on( 'pause', function () { $( 'span.audio_box' ).css( 'opacity', '.3' ); } );

    $( 'span.audio_box' ).on( 'click', function ( e ) {

        e.preventDefault();

        var $target = $( 'audio' )[ 0 ];

        if ( $target.paused ) {

            $target.play();
            $( this ).css( 'opacity', '.5' );

        } else {

            $target.pause();
            $( this ).css( 'opacity', '.3' );

        }

    } );

    $( '.photo_box' ).click( function( e ) {

        e.preventDefault();

        var data = [];

        for ( var i = 1; i <= 16; i++ ) {

            data.push( { href: './assets/gallery/images/' + i + '.jpg', title: '이산하' } );

        }

        $.swipebox( data );

        return false;

    } );

    setInterval( function () {

        if ( $( 'i.flake' ).length < 10 ) {

        var options           = { minSize: 5, maxSize: 10, color: '#e0dbd5' };
        var startPositionLeft = Math.random() * $( document ).width();
        var startOpacity      = 0.5 + Math.random();
        var sizeFlake         = options.minSize + Math.random() * options.maxSize;
        var endPositionTop    = $( document ).height() - 40;
        var endPositionLeft   = startPositionLeft - 100 + Math.random() * 200;
        var durationFall      = $( document ).height() * 10 + Math.random() * 10000;
        var $flake            = $('<i />', { class: 'flake fas fa-asterisk', style: 'display:block;position:absolute;top:0px;' } );

        $flake.appendTo('div.wrap');
        $flake.css( { left: startPositionLeft, opacity: startOpacity, 'font-size': sizeFlake, color: options.color } )
        $flake.animate( { top: endPositionTop, opacity: 0.5 }, durationFall, 'linear', function () { $( this ).remove(); } );

        }

    }, 1000 );

} );