$(document).ready(function (){
    var is_mobile = false;

   $("#portfolio").click(function(){
      $('html, body').animate({
                    scrollTop: $("#tab").position().top
                }, 500);         
        });

   if ($('#menu-icon').css('display') == 'block') {
       is_mobile = true;
   }

   $(window).scroll(function() {
       if ((is_mobile==true) && ($(this).scrollTop()>120)) {
           $('#up-icon').css("display", "block");   ;
       }
       else if ($(this).scrollTop()>500) {
                $('#up-icon').css("display", "block");   ;
       } else {
                $('#up-icon').fadeOut();
            }
    });


 /*$("#menu-icon").hover(function () {
        $('nav, ul').css("display", "block");
    });
   */ 
    });



