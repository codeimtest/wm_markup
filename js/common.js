$(".lang_button").click(function() {
	$('.language_select').delay(100).fadeIn(); // задержка 300 мс перед показом
});

$(".close_btn").click(function() {
	$('.language_select').delay(100).fadeOut(); // задержка 300 мс перед скрытием
});
$(window).on('scroll', function() {
	if ($(this).scrollTop() > 30) {
			$('header').addClass('scrolled');
	} else {
			$('header').removeClass('scrolled');
	}
});
$(".menu_toggle").click(function(){
	$(this).toggleClass('active')
	$('aside').toggleClass('active')
	$('aside').delay(200).fadeToggle(200)
	$('.aside_overlay').delay(200).fadeToggle(200)
	$('body').toggleClass('lock')
})
$('.aside_overlay').click(function(){
	$(this).delay(200).fadeOut()
	$('aside').delay(200).fadeOut()
	$('.menu_toggle').removeClass('active')
	$('body').removeClass('lock')
})