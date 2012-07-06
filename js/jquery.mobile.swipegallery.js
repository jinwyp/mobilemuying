$('#imggallery').click(function(){


    var imglist = $(this).find('ul').children();
    console.log(imglist);

    $(imglist).first().removeClass("imggalleryshow");
    $(imglist).next().addClass("imggalleryshow");


    $.mobile.silentScroll(10);
});