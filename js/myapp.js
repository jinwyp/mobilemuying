jQuery('#gotop').tap(function(){
    $.mobile.silentScroll(10);
});

jQuery( '#categorypage' ).bind( 'tap', function( event ){

    $.mobile.changePage();

});


jQuery( '#myaccountpage' ).bind( 'tap', function( event ){

    $.mobile.changePage("myaccount.html", { transition : "slide" });

});

jQuery( '#shoppingcartpage' ).bind( 'tap', function( event ){

    $.mobile.changePage("shoppingcart.html", { transition : "slide" });

});


//$('#category').trigger('create');