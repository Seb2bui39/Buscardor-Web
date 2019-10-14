$('#mostrarTodos').on('click',function () {
  alert("hola")
  });
$('#formulario').submit(function (event) {

});

$('#mostrarTodos').on('click',function () {

  $.ajax({
    url:'./datos.php',
    type:'GET',
    data:{},
    success: function (data) {
      $('#colResultados').append('<li>'+ data.Id + '</li>');
      alert(data)
    },
      error:function(){
        alert("error");
      }
      })

  })

$ciudad=$_GET['ciudad'],
$tipo=$_GET['tipo'],
$precio=$_POST['precio']

$('#colResultados').append('<img src="./img/home.jpg" class="tamañoimagen"></img>');
$('#colResultados').append('<p>'+'<li>'+ "Registro N°: "+informacion[i].Id + '</li>');
$('#colResultados').append('<li>'+ "Direccion: " +informacion[i].Direccion + '</li>');
$('#colResultados').append('<li>'+ "Ciudad: " +informacion[i].Ciudad + '</li>');
$('#colResultados').append('<li>'+ "Telefono: " +informacion[i].Telefono + '</li>');
$('#colResultados').append('<li>'+ "Codigo Postal: " +informacion[i].Codigo_Postal + '</li>');
$('#colResultados').append('<li>'+ "Tipo: " +informacion[i].Tipo + '</li>');
$('#colResultados').append('<li>'+ '<br>'+"Precio: "+ '</br>' +informacion[i].Precio + '</li>'+ '</p>');

<?php
$city = [];
foreach ($data as $key => $value) {
if (in_array($value['Ciudad'] , $city)) {
pass ;
}
else{
echo '<option value="">'.$value['Ciudad'] .'</option>';
$city[] = $value['Ciudad'] ;
}



}?>
