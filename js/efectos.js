$(document).ready(function(){
     // EFECTO MENU
     $('.menu a').each(function(index, elemento){
          $(this).css({
               'top': '-200px'
          });

          $(this).animate({
               top: '0'
          }, 1500 + (index * 500));
     });

     //EFECTO HEADER
     if ( $(window).width() > 800 ) {
          $('header .textos').css({
               opacity: 0,
               marginTop: 0
          });

          $('header .textos').animate({
               opacity: 1,
               marginTop: '-52px'
          }, 1500);
     }

     //SCROLL ELEMENTOS MENU
     var  acercaDe = $('#acerca-de').offset().top,
          menu = $('#platillos').offset().top,
          galeria = $('#galeria').offset().top,
          ubicacion = $('#ubicacion').offset().top;

     $('#btn-acerca-de').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: acercaDe - 100
          }, 600);
     });

     $('#btn-menu').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: menu
          }, 1000);
     });

     $('#btn-galeria').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: galeria
          }, 1400);
     });

     $('#btn-ubicacion').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: ubicacion
          }, 1800);
     });
});
