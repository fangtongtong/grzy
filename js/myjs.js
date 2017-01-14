// JavaScript Document

$(function(){
    var timer=null;
    var num=0;
    $('.nav').hide();
    $('.enter').click(function(e) {
        $('.welcome').stop().animate({height: 0+'%', opacity: 0}, 300)
        $('.content .one').removeClass('out')
        $('.nav').fadeIn();
        $(document).mousewheel(function(e,d){
            clearTimeout(timer);
            timer=setTimeout(function(){
                num-=d;
                if(num>3){num=3}
                if(num<0){num=0}
                $('.gps li').eq(num).addClass('current').siblings().removeClass();
                $('.gps li').eq(num).addClass('show').siblings().removeClass();
                $('.content').stop().animate({top:-100*num+'%'},1000)
                $('.content>div').eq(num).removeClass('out').siblings().addClass('out')
            },300)
        })


    });
    /* 侧边角标 */
    $('.gps li').click(function(e) {
        var index=$(this).index();
        $(this).addClass('current').siblings().removeClass();
        $(this).addClass('show').siblings().removeClass();
        $('.content').stop().animate({top:-100*index+'%'},1000);
        num=index;
        $('.logo_r li').eq(num).addClass('current').siblings().removeClass('current')
        $('.content>div').eq(num).removeClass('out').siblings().addClass('out')
    });

    $('.logo_r li').click(function(e) {
        var index=$(this).index();
        $(this).addClass('current').siblings().removeClass('current')
        $('.content').animate({top:-index*100+'%'});
        num=index;	//让角标和屏幕切换一致
        $('.gps li').eq(num).addClass('current').siblings().removeClass('current');
        $('.gps li').eq(num).addClass('show').siblings().removeClass();
        $('.content>div').eq(num).removeClass('out').siblings().addClass('out');
    });

    $('.music').click(function(e) {
        if( $('audio').get(0).muted == false ){
            $('audio').get(0).muted=true;
            $('.music ul li').css('background', '#00ff00');
        }else{
            $('audio').get(0).muted=false;
            $('.music ul li').css('background', '#fff');
        }
    });

    /*第二屏*/
    $('.first_in').hover(function() {
        $('.ps').removeClass('current').siblings().addClass('current');
    },function(){
        $('.ps').addClass('current').siblings().removeClass('current');
    });
    $('.second_in').hover(function() {
        $('.ai').removeClass('current').siblings().addClass('current');
    },function(){
        $('.ai').addClass('current').siblings().removeClass('current');
    });
    $('.third_in').hover(function() {
        $('.dw').removeClass('current').siblings().addClass('current');
    },function(){
        $('.dw').addClass('current').siblings().removeClass('current');
    });

    /*第三屏*/
    /*app旋转*/
    ;(function(){
        $('.app ul li').each(function(index, element) {
            var index=index*45
            $(element).css({ transform:'rotateY('+index+'deg) translateZ(350px)' })
        });
    })();
    /*icon动效*/
    ;(function(){
        $('.icon ul li').hover(function(e) {
            var x=e.pageX;
            var y=e.pageY;
            var user=$(this).children().attr('href')
            $('.icon .icon_show').css('background','url('+user+')')
            $('.icon .icon_show').stop().show(500).css({left:x-260,top:y-150})  // +10是让图片不要靠近鼠标点,有动画要加stop
            $(this).siblings().stop().fadeTo(300,0.3).css({'transition':'all 0.3s','transition-delay':'0'})
        },function(){
            $('.icon .icon_show').hide()
            $('.icon ul li').siblings().stop().fadeTo(300,1).css({'transition':'all 1.5s','transition-delay':'0'})
        });

        //让图片跟随鼠标
        $('.icon ul li').mousemove(function(e) {
            var x=e.pageX;
            var y=e.pageY;
            $('.icon .icon_show').css({left:x-260,top:y-150})
        });
    })();
    /*焦点图*/
    ;(function(){
        var timer=null;
        var num=0;
        function gogo(){
            $('.banner ul li').eq(num).fadeIn().siblings().hide();
            $('.banner ol li').eq(num).addClass('current').siblings().removeClass();
        }
        function slide(){
            num++;
            if(num>6){num=0};
            gogo();
        }
        function turn(){
            clearInterval(timer);
            timer=setInterval(function(){
                slide();
            },4000)
        }
        turn();
        $('.banner').hover(function(e) {
            clearInterval(timer);
            $('span').show();
        },function(){
            turn();
            $('span').hide();
        });
        $('.banner ol li').hover(function(e) {
            var index=$(this).index();
            num=index
            $('.banner ul li').eq(num).fadeIn().siblings().hide();
            $(this).addClass('current').siblings().removeClass();
        });
        $('.banner .left').click(function(e) {
            num--;
            if(num<0){num=6}
            gogo()
        });
        $('.banner .right').click(function(e) {
            slide();
        });

    })();
    /*界面切换*/
    ;(function(){
        $('.subnav ol li').eq(0).click(function(e) {
            $('.three .app').css('display','block')
            $('.three .web').css('display','none')
            $('.three .icon').css('display','none')
            $('.three .banner').css('display','none')
        });
        $('.subnav ol li').eq(1).click(function(e) {
            $('.three .web').css('display','block')
            $('.three .app').css('display','none')
            $('.three .icon').css('display','none')
            $('.three .banner').css('display','none')
        });
        $('.subnav ol li').eq(2).click(function(e) {
            $('.three .icon').css('display','block')
            $('.three .app').css('display','none')
            $('.three .web').css('display','none')
            $('.three .banner').css('display','none')
        });
        $('.subnav ol li').eq(3).click(function(e) {
            $('.three .banner').css('display','block')
            $('.three .app').css('display','none')
            $('.three .web').css('display','none')
            $('.three .icon').css('display','none')
        });
    })();

    /*第四屏动效*/
    ;(function(){
        $('.about_in').hover(function() {
            $('.about_in .span01').stop().animate({marginTop:  -120+'px', opacity: 1}, 500)
            $('.about_in .span02').stop().animate({marginTop:  -60+'px', opacity: 0}, 500)
        },function(){
            $('.about_in .span01').stop().animate({marginTop:  -60+'px', opacity: 0}, 500)
            $('.about_in .span02').stop().animate({marginTop:  -40+'px', opacity: 1}, 500)
        });

    })();








})