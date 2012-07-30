jQuery('#gotop').tap(function(){
    $.mobile.silentScroll(10);
});

jQuery('#balance').bind('click', function (event) {
    //alert("fa af a")
    event.preventDefault();
    jQuery('#new-dialog').remove();
    jQuery('body').append('<div data-role="page" id="new-dialog" ><div data-role="header" data-theme="c"><h1 id="errorText">提示信息</h1></div><div data-role="content" data-theme="c"><p>商品A库存不足</p><p><a href="#"  data-role="button"  data-rel="back" data-theme="c">确定</a></p></div></div>');
    jQuery.mobile.changePage(jQuery('#new-dialog'), { role : 'dialog' });
});

jQuery(document).delegate('#new-dialog a', 'click', function (event) {
    event.preventDefault();
    jQuery.mobile.changePage(jQuery('#shoppingcart'));
});

jQuery("div[data-role*='page']").live('pagehide', function(event, ui) {
    if (jQuery(this).children("div[data-role*='content']").is(".command-no-cache"))
        jQuery(this).remove();
});
