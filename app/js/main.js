jQuery.easing['easeOutCirc'] = function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
}
$(function() {
var option = {
    speed: 6,
    duration: 3,
    stopImageNumber: 4
};

$("#go").click(function() {
$('#go').prop('disabled', true);
option.stopImageNumber = Math.random() * 11|0;
$(".roulette-inner  img").removeClass("active");
$("#config").text(JSON.stringify(option));
$({
    left: 0
}).animate({
    left: 844 * option.speed + 75 * (option.stopImageNumber + 6)
}, {
    duration: option.duration * 1000,
    easing: "easeOutCirc",
    step: function(a) {
        $(".roulette-inner").css("transform", "translateX(-" + a % 844 + "px)");
    },
    complete: function() {
        $(".roulette-inner  img").eq(option.stopImageNumber + (option.stopImageNumber < 6) * 11).addClass("active");
        $('#go').prop('disabled', false);
    }
});
})
});