$(function()
{
	$('.Home').click(function(){
	  			
	  	$('body,html').animate({scrollTop: $(".contenedor").offset().top},"slow");
  				
	 });
		$(".contenido").mousewheel(function(event, delta) {	
			this.scrollLeft -= (delta * 100);
			event.preventDefault();
			if(delta > 0 && this.scrollLeft < 1 )
			{
				$('body,html').animate({scrollTop: $("body").offset().top},"slow");
			}
		});   
		
		$(window).mousewheel(function(event, delta) {
	  		if(delta < 0){
	  			$('body,html').animate({scrollTop: $(".contenido").offset().top},"fast");
  			}
  		})

});