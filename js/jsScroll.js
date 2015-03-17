$(function()
{
	$('.Home').click(function(){
	  			
	  	$('body,html').animate({scrollTop: $(".contenedor").offset().top},"slow");
  				
	 });
	$('.scrollBoton').click(function(){
	  			
	  	$('body,html').animate({scrollTop: $(".contenido").offset().top},"slow");
  				
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
                grafico();
  			}
  		})
    function grafico (){
      var roleStats = [
          {
              value: 65,
              color:"#F7464A",
              highlight: "#FF5A5E",
              label: "HTML5"
          },
          {
              value: 60,
              color: "#46BFBD",
              highlight: "#5AD3D1",
              label: "CSS3"
          },
          {
              value: 55,
              color: "#FDB45C",
              highlight: "#FFC870",
              label: "PHP"
          },
          {
              value: 40,
              color: "#949FB1",
              highlight: "#A8B3C5",
              label: "Mysql"
          },
          {
              value: 75,
              color: "#4D5360",
              highlight: "#616774",
              label: "Javascript"
          }
      ];
      var ctx = document.getElementById("canvas").getContext("2d");
      window.myPolarArea = new Chart(ctx).PolarArea(roleStats, {responsive: false});

    }
});
