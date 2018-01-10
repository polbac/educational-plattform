<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control, X-Total-Count");
header("Access-Control-Expose-Headers: X-Total-Count");



require '../redbean/rb.php';
R::setup( 'mysql:host=localhost;dbname=ifts_sistema', 'root', '' );
require '../vendor/autoload.php';
require '../entidades/Entidad.php';

use Phroute\Phroute\RouteCollector;
use Phroute\Phroute\Dispatcher;

$entidades = array(
	
	new Entidad(
		'alumnos', 
		array('nombre', 'apellido', 'dni', 'titulo', 'anio_egreso', 'telefono', 'direccion', 'localidad', 'provincia', 'lugar_nacimiento', 'lugar_residencia', 'email', 'genero', 'anio_inscripcion', 'fecha_nacimiento', 'carrera_aprovado')
	),

	new Entidad(
		'profesores', 
		array('nombre', 'apellido', 'email', 'dni', 'telefono', 'ficha', 'titulo')
	),

	new Entidad(
		'profesor_materia', 
		array('fk_profesor', 'fk_materia', 'fecha_alta', 'fecha_baja')
	),

	new Entidad(
		'materia', 
		array('nombre', 'codigo')
	),

	new Entidad(
		'examen', 
		array('fk_llamado', 'fk_materia', 'fecha', 'llamado')
	),

	new Entidad(
		'examen_alumno', 
		array('fk_alumno', 'fk_examen', 'aprovado', 'nota')
	)

);

$router = new RouteCollector();

foreach ($entidades as $entidad) {
	
	$router->get('/api/'. $entidad->naming(), function() use ($entidad) {
		$content = $entidad->get();
		header('X-Total-Count: ' . count($content));
		print json_encode($entidad->get());
	});

	$router->post('/api/'. $entidad->naming(), function() use ($entidad) {
    	print json_encode($entidad->post());
	});
}

if ($_SERVER['REQUEST_METHOD'] !== 'OPTIONS'){
	$dispatcher =  new Dispatcher($router->getData());
	$dispatcher->dispatch($_SERVER['REQUEST_METHOD'], $_SERVER['REDIRECT_URL']);
}

?>