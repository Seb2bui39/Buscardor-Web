$('#mostrarTodos').on('click',function () {
$('#colResultados').empty();
  $.ajax({
    url:'./datos.php',
    type:'GET',
    data:{},
    success: function (data) {
      informacion = JSON.parse(data)
      for (var i = 0; i < informacion.length; i++) {
        $('#colResultados').append(`<div class="row">
        <div class="col l4 img">
        <img src="img/home.jpg" class="tamañoimagen" >
        </div>
        <div class="col l6">
        <span>Direccion  :`+informacion[i].Direccion+`</span><br>
        <span>Ciudad :`+informacion[i].Ciudad+`</span><br>
        <span>Teléfono :`+informacion[i].Telefono+`</span><br>
        <span>Código Postal :`+informacion[i].Codigo_Postal+`</span><br>
        <span>Tipo :`+informacion[i].Tipo+`</span><br>
        <span class="colorprecio">Precio :`+informacion[i].Precio+`</span><br>
        </div>
        </div>`)
      }
    },
      error:function(){
        alert("error");
      }
      })

  })

$('#formulario').submit(function (event) {
    event.preventDefault();
    $('#colResultados').empty();
  var tipo =$('#selectTipo').val();
  var ciudad =$('#selectCiudad').val();
  var precioMin = $('.irs-from').text();
  var precioMax = $('.irs-to').text();
  $.ajax({
    url:'./datos.php',
    type:'GET',
    data:{},
    success: function (data) {
      informacion = JSON.parse(data)
      for (var i = 0; i < informacion.length; i++) {
        if (informacion[i].Precio>precioMin & informacion[i].Precio<precioMax ) {
          if (ciudad==informacion[i].Ciudad || ciudad=="ciudad") {
            if (tipo==informacion[i].Tipo || tipo=="Tipo") {
              $('#colResultados').append(`<div class="row">
              <div class="col l4 img">
              <img src="img/home.jpg" class="tamañoimagen" >
              </div>
              <div class="col l6">
              <span>Direccion  :`+informacion[i].Direccion+`</span><br>
              <span>Ciudad :`+informacion[i].Ciudad+`</span><br>
              <span>Teléfono :`+informacion[i].Telefono+`</span><br>
              <span>Código Postal :`+informacion[i].Codigo_Postal+`</span><br>
              <span>Tipo :`+informacion[i].Tipo+`</span><br>
              <span class="colorprecio">Precio :`+informacion[i].Precio+`</span><br>
              </div>
              </div>`)
            }
          }
        }
      }
    },
      error:function(){
        alert("error");
      }
      })
})


/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       video.play();
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

inicializarSlider();
playVideoOnScroll();


$('select').material_select();
