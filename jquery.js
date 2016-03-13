$(document).ready(function(){
	$(".nupload").click(function () {  
			$('.main .uploader input[type=file],.main .uploader input[type=text]').val('');
			$('.main aside[class=resultupload]').fadeOut('slow');
			$('.main aside[class=newupload]').fadeOut('slow');
			$('.main aside[class=upload]').delay(1500).fadeIn('speed');
	});
});
$(document).ready(function(){
	$(".fadein_sibox").click(function () {
		$(".signinbox").slideToggle('slow');
	});
});
$(document).ready(function(){
	$(".choosefile").click(function () {
		var cfid = $('.'+$(this).attr('cfid'));
		var viewcfid = $('.view_'+$(this).attr('cfid'));
		cfid.click();
		cfid.change(function () {
			viewcfid.val(cfid.val());
		});
	});
});
$(document).ready(function(){

  $('input[teramfile-kname=teramfile_formajax]').click(function(e){
    
	$('.main aside[class=upload]').fadeOut('slow');
	$('.main aside[class=startupload]').delay(800).fadeIn('slow');
	
    e.preventDefault();
    
    var formData = new FormData($(this).parents('form[teramfile-fname='+$('input[teramfile-kname=teramfile_formajax]').attr('teramfile-fname')+']')[0]);
    
    $.ajax({
    
      url: $('form[teramfile-fname='+$('input[teramfile-kname=teramfile_formajax]').attr('teramfile-fname')+']').attr('action'),
      
      type: $('form[teramfile-fname='+$('input[teramfile-kname=teramfile_formajax]').attr('teramfile-fname')+']').attr('method'),
      
      xhr: function() {
      
        var myXhr = $.ajaxSettings.xhr();
        
        return myXhr;
        
        return false; 
        
      },
      
      success: function (data) {
	  
		$('.main aside[class=startupload]').fadeOut('speed');  
		$('.main aside[class=resultupload]').delay(1000).html(data).fadeIn('slow');
		$('.main aside[class=newupload]').delay(1000).fadeIn();

      },
      
      data: formData,
      
      cache: false,
      
      contentType: false,
      
      processData: false
      
    });
    
    return false;
    
  }); 
  
});