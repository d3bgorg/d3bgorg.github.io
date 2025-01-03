
function loadCustomFontSize(){
	var custom_fontsize = localStorage.getItem('custom_fontsize');
	$('.post_container').css("font-size", custom_fontsize);
}

function incSize(currentSize, incr, min, max) {
	fSize = (parseFloat(currentSize) + incr);
	if(fSize > 16){ fSize = 13; }
	return (fSize) + 'px';
}

jQuery(document).ready(function(){
	$.expr[':'].external = function(obj){
		return (obj.hostname != location.hostname);
	};
	$('a:external').attr('target', '_blank');
	$('.lightbox').removeAttr('target');
});
$(document).scroll(function () {
	var doc = $(this).scrollTop();
	if(doc > 300){
		$(".scrolltoTop").fadeIn();
	} else {
		$(".scrolltoTop").fadeOut();
	}
});
$(document).ready(function(){
	$(".scrolltoTop").click(function (){
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
    $('.forum_bg').before($('.top_pagination'));

	$(".smooth span").css("opacity","0");
	$(".smooth span").hover(function () {
		$(this).stop().animate({
			opacity: 1
		}, 'slow');
	},
	function () {
		$(this).stop().animate({
			opacity: 0
		}, 'slow');
	});
	$('.forum_cat:last-child').css({'background':'none'});
	$('.problem_divider:last').remove();
	
	$('#search_trigger').click(function() {
	  $('#searchbox').show('fast');
	});
	
	$('#bbcode').bind("keyup change", function() {
		$(window).bind('beforeunload', function(){
			if( $('#bbcode').val() !== '' ){
				return "Сигурни ли сте?"
			}
		});
	});
	$('form').submit(function () {
		window.onbeforeunload = null;
	});
	
    $('.bcolumns_td td:eq(0)').addClass("bcolumns_td_shoulder");
    $('.bcolumns_td td:eq(1)').addClass("bcolumns_td_helm");
    $('.bcolumns_td td:eq(2)').addClass("bcolumns_td_amulet");
    $('.bcolumns_td td:eq(3)').addClass("bcolumns_td_gloves");
    $('.bcolumns_td td:eq(4)').addClass("bcolumns_td_chest");
    $('.bcolumns_td td:eq(5)').addClass("bcolumns_td_bracers");
    $('.bcolumns_td td:eq(6), .bcolumns_td td:eq(8)').addClass("bcolumns_td_rings");
    $('.bcolumns_td td:eq(7)').addClass("bcolumns_td_belt");
    $('.bcolumns_td td:eq(9)').addClass("bcolumns_td_weapon");
    $('.bcolumns_td td:eq(10)').addClass("bcolumns_td_pants bcolumns_td_boots");
    $('.bcolumns_td td:eq(11)').addClass("bcolumns_td_offhand");
	
	$("#search_trigger").click(function() { $(".forum_grid_t_pos").css({"display": "none"}); });
	
	
	$('#bbcode').keydown(function (e) {
	  if (e.ctrlKey && e.keyCode == 13) {
		$(".reply_submit").click();
	  }
	});

	$("body").keydown(function(e) {
	  if(e.keyCode == 37) { // left
		$(".jquery-lightbox-button-left").trigger('click');		
	  }
	  else if(e.keyCode == 39) { // right
		$(".jquery-lightbox-button-right").trigger('click');
	  }
	});	
	
	$("#custom_fontsize").click(function() {
		var newFontSize = incSize($('.post_container').css("font-size"), 1, 13, 16);
		$('.post_container').css("font-size", newFontSize);
		localStorage.setItem('custom_fontsize', newFontSize);
	});	
	loadCustomFontSize();
	
	$(document).bind('click', '.openModal', function(){
		$('#modal_iframe').focus();
	});
});



