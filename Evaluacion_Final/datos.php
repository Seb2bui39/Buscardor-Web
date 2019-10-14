<?php

$contenido=file_get_contents("data-1.json");
$datos=json_decode($contenido,true);

 ?>

<?php

function leerDatos(){
$data_file = fopen('./data-1.json', 'r');
$data = fread($data_file, filesize('./data-1.json'));
$data = json_decode($data, true);
fclose($data_file);
return ($data);
};
echo json_encode(leerDatos());
 ?>
