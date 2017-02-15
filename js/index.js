$(function(){
$(".toggle_right").click(function(){
    $(".right").animate({width:0});
    $(".left").animate({width:"100%"});
    $(".toggle_left").fadeIn();
    $(".toggle_right").fadeOut();
    $(".left h1").css({
        animation:"xuanzhuan 1s ease forwards 1s",
        display:"block"
    })
    $(".left h2").css({
        animation:"xuanzhuan 1s ease forwards 1.5s",display:"block"
    })
})
    $(".toggle_left").click(function(){
        $(".right").animate({width:"100%"});
        $(".left").animate({width:"0"});
        $(".toggle_left").fadeOut();
        $(".toggle_right").fadeIn();
    })
    $(".work_cover span").click(function(){
        var index=$(this).index(".work_cover span");
        $(".big_cover").eq(index).fadeIn();
    })
    $(".work_i").click(function(){
        $(".big_cover").fadeOut();
    })
    var imgArr=["url(img/richu.jpg)","url(img/2017.jpg)","url(img/yanshi.jpg)","url(img/diannao.jpg)","url(img/xueshan.jpg)","url(img/lunbo6.jpg)","url(img/gonglu.jpg)"];
    var right=$(".right");
    var num=0;
    function lunbo(){
        num++;
            if(num>imgArr.length-1){
                num=0;
            }
            right.css({
                transition:"background 1s linear",
                backgroundImage:imgArr[num]
            })
    }
    setInterval(lunbo,3000);

    /*返回顶部*/
   $(".left").scroll(function(){
       var top=$(".left").scrollTop();
       if(top>=100){
           $(".back-top").fadeIn();
       }else{
           $(".back-top").fadeOut();
       }
       $(".back-top").click(function(){
           var newobj={st:$(".left").scrollTop()};
           $(newobj).animate({st:0},{
               duration:500,
               step:function(){
                   $(".left").scrollTop(newobj.st);
               }
           })
       })

   })
    //$(".left h3 span").mouseover(function(){
    //
    //    $(this).index(1).css("background","rgba(0,0,0,0.6)").html("关于我");
    //    $(this).eq(index).css("background","rgba(0,0,0,0.6)").html("我的技能");
    //    $(this).eq(2).css("background","rgba(0,0,0,0.6)").html("最新作品");
    //    $(this).eq(3).css("background","rgba(0,0,0,0.6)").html("联系我");
    //}).mouseout(function(){
    //
    //})






})

