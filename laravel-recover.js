/**
 * @developer Daniel Pierobon Jr
 * @email danielpjr80@gmail.com
 * @created 23/05/18 11:25
 *
 * @repository https://github.com/danielpjr/laravel-recover
 *
 * @dependencies [jQuery] https://github.com/jquery/jquery
 *
 */

;(function( $, window, document, undefined ) {

    'use strict';

    $.fn.dpjLaravelRecover = function( options ) {

        var _settings = $.extend(
            {},
            {
                emBreve:null
            },
            options ),
            _form = $( 'form#ag-generic-form-recover' ) || $(),
            _self = this;

        if( !_form.get( 0 ) )
        {
            _form = $(
                '<form id="ag-generic-form-recover" method="post" action="">' +
                ' <input type="hidden" name="_token" value="' + $( "meta[name='csrf-token']" ).attr( 'content' ) + '">' +
                '</form>'
            );

            $( 'body' ).append( _form );
        }

        _self.on( 'click', function(){

            _form.attr( {

                action : _self.data( 'plugin-laravel-recover' ) || ''

            } ).submit();
        });
    };

})( jQuery, window, document );