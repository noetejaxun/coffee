$(document).ready(function(){
     //Ejecutar evento de scroll y ancho de ventana
     $(window).scroll(function(){
          var windowWidth = $(window).width();
          if(windowWidth > 800) {
               var scroll = $(window).scrollTop();

               $('header .textos').css({
                    'transform': 'translate(0px, ' + scroll / 8 + '%)'
               });

               $('.acerca-de article').css({
                    'transform': 'translate(0px, -' + scroll / 4.7 + '%)'
               });
          }
     });

     $(window).resize(function(){
          var windowWidth = $(window).width();
          if (windowWidth < 800) {
               $('.acerca-de article').css({
                    'transform': 'translate(0px, 0px)'
               });
          }
     });
});
