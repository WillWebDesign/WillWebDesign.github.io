var iteracion=0;
$(function(){
		$(".contenido").mousewheel(function(event, delta) {
			//alert(this.scrollLeft -= (delta * 1));
			this.scrollLeft -= (delta * 100);
			event.preventDefault();
		});   

		$(window).scroll(function() {
	  		var scrolltop =$(this).scrollTop();
	  		//var scrollL=$('.contenido').scrollLeft();
	  		
	  		if(scrolltop > 10 && iteracion==0){
	  			$('body,html').animate({scrollTop: $(".contenido").offset().top},"slow");
	  			iteracion=1;
	  			$('.volverArriba').css("display","block");
  			}
	  		$('.volverArriba').click(function(){
	  			if(iteracion==1){$('body,html').animate({scrollTop: $("body").offset().top},"slow");
  				}
	  		});
	  		if(scrolltop < 100 && iteracion==1){
		  		iteracion=0;
		  		$('.volverArriba').css("display","none");
  			}
  			/*if(scrollL < 4 && iteracion==1){
	  			$('body,html').animate({scrollTop: $("body").offset().top},"slow");
  			}*/
  			
  		})
	});