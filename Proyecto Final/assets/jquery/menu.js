$(document).ready(function(){
	$("#sweb").click(function(){
    if $(".web"){
    	(this).fadeIn("slow");
    } else{
    	.fadeOut("slow");
    }
		});


	$("#fcontacto").submit(function( event ){
		event.preventDefault();
		$.ajax({
			type:"post",
			url:"send.php",
			data:$(this).serialize(),
			success: function(data){
				$("respuesta").slideDown();
				$("#respuesta").html(data);
			}
		});

		return false;
	});
$(function () {
  $('[data-toggle="popover"]').popover({ html : true })
})

var image = '<img src="images/image2.png">';
		$('#popover').popover({placement: 'bottom', content: image, html: true});


$("body").append("<div class='scrollup'></div>");
  $(window).scroll(function(){
    if ($(this).scrollTop() > 120) $('.scrollup').fadeIn();
	else $('.scrollup').fadeOut();
	});
    $(document).on("click",".scrollup",function(e){
      e.preventDefault();
      $("html, body").stop().animate({ scrollTop: 0 }, "slow");
    });
});
