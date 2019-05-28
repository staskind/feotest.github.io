$(document).ready(function(){
	$(function () {
	$('.slider').slick({
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplay: true,
		arrows: true,
		arrows: true,
		});
	});

// Липкое меню

	$(function(){
		$(window).scroll(function() {
			if($(this).scrollTop() >= 210) {
				$('nav').addClass('sliky');
			}
			else{
				$('nav').removeClass('sliky');
			}
		});
	});

// кнопка на верх
	$(function(){
	  $('.btn-up').click(function(){
	  	$('body,html').animate({scrollTop:0},1500);
	  });

	  $(window).scroll(function(){
	  	if ($(window).scrollTop()>200) {
	  		$('.btn-up').addClass('active');
	  	}else{
	  		$('.btn-up').removeClass('active');
	  	}
	  });
	});

// обратная связь
	
$(document).mouseup(function (e) {
	var container = $(".call-back-wrap");
	if (container.has(e.target).length === 0){
		container.fadeOut(800);
	}
});

	


});

