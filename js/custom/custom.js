
// 哔哩哔哩返回顶部按钮
$(function () {
    document.body.insertAdjacentHTML("beforeend", `<div class="back-to-top"></div>`);
    $('.back-to-top').css('display', 'none');
    //scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。
    $(window).scroll(function () {
        var scroHei = $(window).scrollTop();//滚动的高度
        if (scroHei > 200) {
            // $('.back-to-top').css('top', '300px');

            $('.back-to-top').fadeIn();

        } else {
            // $('.back-to-top').css('top', '-999px');
            $('.back-to-top').fadeOut();
            if ($(window).scrollTop() === 0) {
                $('.back-to-top').css('animation', '');
            }


        }
    })

    /*点击返回顶部*/
    $('.back-to-top').click(function () {
        this.style = 'animation: to-top-fly 0.5s steps(1) infinite;'
        $('body,html').animate({
            scrollTop: 0,

        }, 600);
        // $('div').style = 'animation: div-to-top 0.5s steps(1) infinite;'
        // this.style = '';

    })
})


// 代码复制按钮
$(function () {
    $(".highlight").wrap("<div class='code-wrapper' style='position:relative'></div>");
    /*页面载入完成后，创建复制按钮*/
    !function (e, t, a) {
        /* code */
        var initCopyCode = function () {
            var copyHtml = '';
            copyHtml += '<div class="btn-copy" data-clipboard-snippet="">';
            copyHtml += '  <i class="fa fa-clipboard"></i><span>复制</span>';
            copyHtml += '</div>';
            $(".highlight .code").before(copyHtml);
            var clipboard = new ClipboardJS('.btn-copy', {
                target: function (trigger) {
                    return trigger.nextElementSibling;
                }
            });
            clipboard.on('success', function (e) {
                e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>复制成功</span>"
                setTimeout(function () {
                    e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>复制</span>"
                }, 1000)

                e.clearSelection();
            });
            clipboard.on('error', function (e) {
                e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>复制失败</span>"
                setTimeout(function () {
                    e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>复制</span>"
                }, 1000)
                e.clearSelection();
            });
        }
        initCopyCode();
    }(window, document);

})


// 站点运行时间计算，传入参数为站点部署时间
function showRuntime(startTime) {
    var startDate = new Date(startTime);
    var now = new Date();
    var diffms = now - startDate;  // 相差毫秒数
    var diffDays = Math.floor(diffms / (24 * 3600 * 1000));//计算出相差天数
    var leftms1 = diffms % (24*3600*1000);  // 剩余ms数
    var hours = Math.floor(leftms1 / (3600 * 1000));
    var leftms2 = leftms1 % (3600 * 1000);
    var minutes = Math.floor(leftms2 / (60 * 1000));
    var leftms3 = leftms2 % (60 * 1000);
    var seconds = Math.floor(leftms3 / (1000));

    var ans = [diffDays, hours, minutes, seconds];
    for (var i = 0; i < ans.length; i++) {
        if(i==0){
            ans[i] = ''+ans[i];
        }
        else {
            if(ans[i]<10) ans[i] = '0' + ans[i];
            else ans[i] = ''+ans[i]
        }
    }

    text = '';
    text += '<span>';
    text += '本站已运行 ' + ans[0] + ' 天' + ans[1] + ' 小时 ' + ans[2] + ' 分 ' + ans[3] + ' 秒'; 
    text += '</span>';
    $('.site-runtime').empty().append(text);
    
}

$(setInterval('showRuntime("2021-08-20 11:03:45")', 500));

// 添加按钮：白天夜间模式切换

// $(function() {
//     document.body.insertAdjacentHTML("beforeend", `<div class="btn-light-dark"><div class='light' id='btn-kaiguan'></div></div>`);
//     var btnKaiguan =$('#btn-kaiguan');
//     var btnLightDark = $('.btn-light-dark');
//     var body = $('body');
//     var temp = 1;
//     btnKaiguan.click(function () {
//         if (temp == 1) {
//             btnKaiguan.attr('class', 'dark');
//             temp = 0;
//             btnLightDark.css({'border':'2px solid  rgb(11, 243, 81)'});
//             body.css('background-color', 'rgb(7, 7, 29)');
//             body.css('color', 'white');
//         } else {
//             btnKaiguan.attr('class', 'light');
//             temp = 1;
//             btnLightDark.css({ 'border': '2px solid  black' });
//             body.css('background-color', '#f8f8f8');
//             body.css('color', 'black');
//         }

//     })
// })
