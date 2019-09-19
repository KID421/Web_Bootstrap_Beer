// 按下回到頂端按鈕時回到頂端
// click
// animate 動畫 fadeIn
// scrollTop 元素的上方
// jqReady
$(document).ready(function () {
    // jqClick
    $('#back-to-top').click(function (e) { 
        // 找到 html, body 執行動畫 ({動畫屬性: 值}, 時間);
        $('html, body').animate({scrollTop: 0}, 1000);
    });

    // 視窗 - window
    // 捲動 - scroll()
    $(window).scroll(function () { 
        // 輸出訊息至控制台
        console.log('捲動中~');
    });
});