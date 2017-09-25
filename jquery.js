
$(document).ready(function() {
    
    $("dd").addClass("lead");
    $("p").addClass("lead");
    $("div.carousel-caption > p").removeClass("lead");
    $("p span").addClass("negrita");
    $("dt").addClass("dtClass");
    $("h1:contains(Tarifas)").attr('id','titulo-precios');
    $("h1:contains(Retos)").addClass("tituloh1");
    $("h3:contains(Reto)").attr('id','titulo-ret');
});