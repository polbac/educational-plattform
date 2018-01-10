<?php
class Entidad{
	
	private $nombre = '';
	private $modelo = array();

	function __construct($nombre, $modelo){
		$this->nombre = $nombre;
		$this->modelo = $modelo;
	}

	public function naming(){
		return $this->nombre;
	}

	public function get(){
		return R::find( $this->nombre );
	}

	public function post(){

		$row = R::dispense( $this->nombre );
		$request_body = file_get_contents('php://input');
		$data = json_decode($request_body);
		
		/* foreach($data as $key => $value) {
		    $row->{$key} = $value;
		} */

		$row->nombre = 'Pablo';
		$id = R::store( $row );
		return $id;

	}

	public function put(){
		
	}

	public function delete(){
		
	}
}

?>