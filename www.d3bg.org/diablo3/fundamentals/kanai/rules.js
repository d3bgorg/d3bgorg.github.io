function droprules(){
	if (($('.drop1').html() == '') && ($('.drop4').html() == '') && ($('.drop7').html() == '')) { $('.drop1, .drop4, .drop7').removeClass('occupied2'); }
	if (($('.drop1').html() != '') && ($('.drop4').html() == '') && ($('.drop7').html() == '')) { $('.drop4, .drop7').removeClass('occupied2'); }
	if (($('.drop2').html() == '') && ($('.drop5').html() == '') && ($('.drop8').html() == '')) { $('.drop2, .drop5, .drop8').removeClass('occupied2'); }
	if (($('.drop2').html() != '') && ($('.drop5').html() == '') && ($('.drop8').html() == '')) { $('.drop5, .drop8').removeClass('occupied2'); }
	if (($('.drop3').html() == '') && ($('.drop6').html() == '') && ($('.drop9').html() == '')) { $('.drop3, .drop6, .drop9').removeClass('occupied2'); }
	if (($('.drop3').html() != '') && ($('.drop6').html() == '') && ($('.drop9').html() == '')) { $('.drop6, .drop9').removeClass('occupied2'); }
	
	if (($('.drop3').html() == '') && ($('.drop6').html() != '') && ($('.drop9').html() != '')) { $('.drop3').addClass('occupied2'); }
	if (($('.drop2').html() == '') && ($('.drop5').html() != '') && ($('.drop8').html() != '')) { $('.drop2').addClass('occupied2'); }
	if (($('.drop1').html() == '') && ($('.drop4').html() != '') && ($('.drop7').html() != '')) { $('.drop1').addClass('occupied2'); }
	
	if (($('.drop1').html() == '') && ($('.drop4').html() != '') && ($('.drop7').html() == '')) { $('.drop1').addClass('occupied2'); }
	if (($('.drop2').html() == '') && ($('.drop5').html() != '') && ($('.drop8').html() == '')) { $('.drop2').addClass('occupied2'); }
	if (($('.drop3').html() == '') && ($('.drop6').html() != '') && ($('.drop9').html() == '')) { $('.drop3').addClass('occupied2'); }
	
	if (($('.drop1').html() == '') && ($('.drop4').html() == '') && ($('.drop7').html() != '')) { $('.drop1').removeClass('occupied2'); }
	if (($('.drop2').html() == '') && ($('.drop5').html() == '') && ($('.drop8').html() != '')) { $('.drop2').removeClass('occupied2'); }
	if (($('.drop3').html() == '') && ($('.drop6').html() == '') && ($('.drop9').html() != '')) { $('.drop3').removeClass('occupied2'); }
	
	if (($('.drop7').html() != '') && (!$('.drop4').hasClass('occupied2'))){ $('.drop4').addClass('occupied2'); }
	if (($('.drop8').html() != '') && (!$('.drop5').hasClass('occupied2'))){ $('.drop5').addClass('occupied2'); }
	if (($('.drop9').html() != '') && (!$('.drop6').hasClass('occupied2'))){ $('.drop6').addClass('occupied2'); }
}