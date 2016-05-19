/*
 * 编写一个功能函数，将鼠标放在li所在的行上就变一个颜色
 * 采用$("ul").focusColor()调用的方式
 */

jQuery.fn.focusColor = function() {
    var focus_col = "#ccc";       // 聚焦的颜色
    var out_col = "#fff";         // 相反的颜色

    $(this).find("li").each(function() {        // 遍历所有的li元素
        $(this).mouseover(function() {                        // 指定鼠标移入和移出的颜色效果
            $(this).css({"background-color": focus_col});
        }).mouseout(function() {
            $(this).css({"background-color": out_col});
        });
    });
    return $(this);
};

$("#demo-list").focusColor();
