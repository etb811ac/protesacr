
$( document ).ready(function() {

    scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('scroll', function(){
    	animations();
    });
    
    $('.firstSlide').slick({
    	slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.secondSlide',
        responsive:[
            {
                breakpoint:991,
                settings:{
                    arrows: true,
                    dots: true
                }
            }
        ]
    });
    $('.imageSlide').slick({
        arrows:false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.secondSlide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '50px',
        adaptiveHeight:false,
        asNavFor: '.firstSlide',
        arrows: false,
        dots:true,
        centerMode: true,
        focusOnSelect: true,
        responsive:[
            {
                breakpoint:1414,
                settings:{
                    slidesToShow: 3, 
                }
            }
        ]
    });
    
    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
    $.scrollify({
        section:'.section',
        interstitialSection : '.footer'
    });
});

function animations(){
	//text
	if($('.text').visible()){
    	$('.text').addClass('animatedText');
    }

	//service one
    if($('.bulb').visible()){
    	$('.bulb').addClass('animatedBulb');
    }
    if($('.outlet').visible()){
    	$('.outlet').addClass('animatedOutlet');
    }

    //service two
    if($('.alarmKit').visible()){
    	$('.alarmKit').addClass('animatedAlarmKit');
    }

    //service three
    if($('.firePanel').visible()){
    	$('.firePanel').addClass('animatedFirePanel');
    }

    //service four
    if($('.cameraBullet').visible()){
    	$('.cameraBullet').addClass('animatedCameraBullet');
    }
	if($('.cameraOval').visible()){
    	$('.cameraOval').addClass('animatedCameraOval');
    }

}

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
