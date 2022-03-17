$(function () {
    $('[data-toggle="popover"]').popover()
  })
var countDownDate = new Date("March 8,2022 15:10:10").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (distance > 0) {
        document.getElementById("demo").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hours">' + hours + '</span>' + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
    }
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده است!";
        document.getElementById("offer_blur").style.filter = "blur(2px)"
        // document.getElementById("after-expire").setAttribute("id","offer-expire-text")
    }

}, 1000);

var countDownDate2 = new Date("March 10,2022 16:15:25").getTime();
var x2 = setInterval(function () {

    var now2 = new Date().getTime();
    var distance2 = countDownDate2 - now2;

    var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    if (distance2 > 0) {
        // var r = document.getElementByClassName("demos").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hours">' + hours + '</span>' + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
        // console.log(r);
        var z = document.getElementsByClassName("demos");
        for (var i = 0; i < z.length; i++) {
            z[i].innerHTML =
                '<span id="day">' +
                days2 +
                "</span>" +
                '<span id="hours">' +
                hours2 +
                "</span>" +
                '<span id="minutes">' +
                minutes2 +
                "</span>" +
                '<span id="seconds">' +
                seconds2 +
                "</span>";
        }
    }
    if (distance2 < 0) {
        clearInterval(x2);
        document.getElementById("offer-expire-text-inner").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده است!";
        document.getElementById("offer_blur").style.filter = "blur(2px)"
        // document.getElementById("after-expire").setAttribute("id","offer-expire-text")
    }


}, 1000);

var countDownDate4 = new Date("March 1,2022 15:10:10").getTime();
var x4 = setInterval(function () {

    var now4 = new Date().getTime();
    var distance4 = countDownDate4 - now4;

    var days = Math.floor(distance4 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance4 % (1000 * 60)) / 1000);
    if (distance4 > 0) {
        document.getElementById("demo4").innerHTML = '<span id="day">' + days + '</span>' + '<span id="hours">' + hours + '</span>' + '<span id="minutes">' + minutes + '</span>' + '<span id="seconds">' + seconds + '</span>';
    }
    if (distance4 < 0) {
        clearInterval(x4);
        document.getElementById("offer-expire-text-inner4").innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده است!";
        document.getElementById("offer_blur4").style.filter = "blur(2px)"
        // document.getElementById("after-expire").setAttribute("id","offer-expire-text")
    }

}, 1000);

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl: true,
        items: 4,
        loop: true,
        margin: 0,
        nav: true,
        center: true,
        slideBy:2,
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                center: false
            },
            900: {
                items: 3
            },
            1100: {
                items: 4
            }
        }
    });
});
