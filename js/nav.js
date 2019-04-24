$("#open-menu").on("click", function () {
    $(".nav").addClass("open")
});
$(".nav").on("click", function (e) {
    $(this).removeClass("open");
    e.stopPropagation()
});
$(".close-menu").on("click", function () {
    $(".nav").removeClass("open")
});
$(".nav-wrapper").on("click", function (e) {
    e.stopPropagation()
}).on("touchmove", function (e) {
    e.stopPropagation()
});
$(".nav-wrapper>ul>li").on("click", function () {
    $(this).children(".submenu").stop().slideToggle(300).siblings("i").toggleClass("on")
});
