$("#frmLogin").validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 20
        }
    },

    messages: {
        email: {
            required: "请输入Email地址",
            email: "请输入正确的email地址"
        },
        password: {
            required: "请输入密码",
            minlength: jQuery.validator.format("密码不能小于{0}个字符"),
            maxlength: jQuery.validator.format("密码不能最多超过{0}的字符")
        }
    }
});

$("#frmReg").validate({
    errorElement:"span",
    rules: {
        email: {
            required: true,
            email: true,

        },
        password: {
            required: true,
            minlength: 6,
            maxlength: 20
        },
        confirm_password: {
            required: true,
            minlength: 6,
            maxlength: 20,
            equalTo: "#password"
        },
        mobile: {
            required: true,
            number: true

}
    },

    messages: {
        email: {
            required: "请输入Email地址",
            email: "请输入正确的email地址"
        },
        password: {
            required: "请输入密码",
            minlength: jQuery.validator.format("密码不能小于{0}个字符"),
            maxlength: jQuery.validator.format("密码不能最多超过{0}的字符")
        },
        confirm_password: {
            required: "请输入确认密码",
            minlength: jQuery.validator.format("确认密码不能小于{0}个字符"),
            maxlength: jQuery.validator.format("密码不能最多超过{0}的字符"),
            equalTo: "两次输入密码不一致"
        },
        mobile: {
            required: "请输入手机号",
            number: "请输入有效的手机号码"

        }
    }
});

$('.gotop').tap(function(){
    $.mobile.silentScroll(10);
});
    $("#scroller li").bind("swipeleft",function(e){
        //scrollSupressionThreshold:10px,
        //horizontalDistanceThreshold:30px,
        //alert("f f af a")
        $(this).animate({left:'-300px'},"1000");
        $(this).prev().animate({left:'-300px'},"1000");
        return false;
    });
    $("#scroller li").bind("swiperight",function(){
        $(this).hide();
        $(this).prev().show();
        return false;
    });


