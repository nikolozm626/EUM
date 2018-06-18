$(document).ready(function() {
		  $('.toggle').click(function(){
        $('.disable').toggle(function(){
          if($(this).css('display')=='none'){
  				      $(this).css('display')=='block';
                $('.toggle').text('+');
  			  }else{
                $(this).css('display')=='none';
                $('.toggle').text('-');
  			  }
        });
      });
      $('.content-opener').click(function(e){
        e.preventDefault();
          $('.main-content').siblings('div').not($(this).toggleClass('open').next('div').fadeToggle('slow')).fadeOut('fast');
        });
});
