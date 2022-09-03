
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
