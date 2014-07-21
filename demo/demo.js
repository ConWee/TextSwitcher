 /*
 *         CCCCCCCC  OOOOOOOOOOOOO  NN         N  W                           W  EEEEEEEEEEEE   EEEEEEEEEEEE
 *        C          O           O  N N        N   W                         W   E              E            
 *       C           O           O  N  N       N    W                       W    E              E            
 *      C            O           O  N   N      N     W                     W     E              E            
 *      C            O           O  N    N     N      W                   W      E              E            
 *      C            O           O  N     N    N       W                 W       EEEEEEEE       EEEEEEEE    
 *      C            O           O  N      N   N        W       W       W        E              E            
 *      C            O           O  N       N  N         W     W W     W         E              E            
 *       C           O           O  N        N N          W   W   W   W          E              E            
 *        C          O           O  N         NN           W W     W W           E              E            
 *         CCCCCCCC  OOOOOOOOOOOOO  N          N            W       W            EEEEEEEEEEEE   EEEEEEEEEEEE
 *
 *
 *
 *  	Text Swither     
 *  	Version: 0.0.5
 *  	By Ahmadreza Namani
 *
 *  	Contact: Ahmadrezanamani@live.co.uk
 *  	Created: July 20, 2014
 *
 *  	Copyright (c) 2014, Ahmadreza Namani. All rights reserved.
 *  	Available only in github for free https://github.com/Ahmadrezanamani
 *      
*/
$.fn.textswitcher = function initAll( options ) {
        var settings = $.extend({
            time: "1000",
            random: "false",
            easing:"linear",
            direction:"ltr",
            speed:"400",
        }, options );
        if (settings.random == true) {
        	random(settings.time,settings.easing,settings.speed);
        } else if(settings.random == false) {
			defulte(settings.time,settings.easing,settings.speed);
        }
        if (settings.direction == "rtl") {
        	defultertl(settings.time,settings.easing,settings.speed);
        } else if(settings.direction == "ltr") {
        	defulte(settings.time,settings.easing,settings.speed);
        };
};

function check() {
	var titrwidth = $(".titr > h1").width();
	var windowwidth = $(window).width();
	if (windowwidth <= titrwidth) {
		$(".mask > span").css('text-align', 'center');
	} else {
		$(".mask > span").css('text-align', 'left');
	};
}
function checkrtl() {
	var titrwidth = $(".titr > h1").width();
	var windowwidth = $(window).width();
	if (windowwidth <= titrwidth) {
		$(".mask > span").css('text-align', 'center');
	} else {
		$(".mask > span").css('text-align', 'right');
	};
}
function random(timesettings,easingsettings,speedsetting) {
	var height = $('.mask').children('span').height();
	var length = $('.mask').children('span').length;
	$('.mask').css('height', height);
	setInterval(function(){
		var randomnum = Math.floor(Math.random() * length);
		$('.mask').children('span').animate({'top': height * randomnum * -1}, speedsetting,easingsettings);
	}, timesettings);
}
function defulte(timesettings,easingsettings,speedsetting) {
	var count = 0;
	var height = $('.mask').children('span').height();
	var length = $('.mask').children('span').length;
	$('.mask').css('height', height);
	setInterval(function(){
		count++;
		if (count == length) {
			count = 0;
		};
		$('.mask').children('span').animate({'top': height * count * -1}, speedsetting,easingsettings);
	}, timesettings);
	check();
	$(window).resize(check);
}
function defultertl(timesettings,easingsettings,speedsetting) {
	var count = 0;
	var height = $('.mask').children('span').height();
	var length = $('.mask').children('span').length;
	$('.mask').css('height', height);
	setInterval(function(){
		count++;
		if (count == length) {
			count = 0;
		};
		$('.mask').children('span').animate({'top': -1 + height * count * -1}, speedsetting,easingsettings);
	}, timesettings);
	checkrtl();
	$(window).resize(checkrtl);
}
