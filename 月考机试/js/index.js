//导航栏下拉
$(".menu-index").click(function () {
    $(this).toggleClass("san");
    $(".menu-box").toggle();
})

//轮播图
var mySwiper = new Swiper('.swiper', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})

$(document).scroll(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop >= 110) {
        $(".a12").css({ display: "block" })
    } else {
        $(".a12").css({ display: "none" })
    }
})

//回到顶部
var num = true;
var timer = null;
ding();
//点击按钮一直走
function ding() {
    $(".back_to_top").click(function () {
        clearInterval(timer); //每次点击之前先清除防止不断点击
        timer = setInterval(function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var now = Math.floor(-scrollTop / 8);
            //回到顶部  个别chrome浏览器是7
            if (scrollTop == 0) {
                clearInterval(timer);
            }
            num = true; //系统滚动
            document.documentElement.scrollTop = document.body.scrollTop = scrollTop + now;
        }, 30);
    })
}