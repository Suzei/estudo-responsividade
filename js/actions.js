$('.nav-button').click(function() {
    $(".menu").slideDown(200);
});

$('.close-btn').click(function() {
    $('.menu').slideUp(200);
});

$('.info-upside').click(function() {
    $(".info-text").slideToggle(150);
});

$('.kiryu-info').click(function() {
    $('.kiryu-img, .kiryu').slideToggle(100);
});

$('.majima-info').click(function() {
    $('.majima-img, .majima').slideToggle(100);
})

$('.saejima-info').click(function() {
    $('.saejima-img, .saejima').slideToggle(100)
})