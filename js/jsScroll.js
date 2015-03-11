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
        var gameStats = [
          {
            value: 20,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "5 v 5 Normal"
          },
          {
            value: 20,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "3 v 3 Normal"
          },
          {
            value: 20,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "3 v 3 Ranked"
          },
          {
            value: 20,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "5 v 5 Ranked"
          },
          {
            value: 20,
            color: "#4D5360",
            highlight: "#616774",
            label: "Dominion"
          }
        ];
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myDoughnut = new Chart(ctx).Doughnut(gameStats, {});
    }
});
