app.controller('NombreDeMiController',['$scope',function($scope){
	$scope.Nombre="ApretaGil",
	$scope.Boton_Click=function()
	{
		$scope.Nombre="Cliqueaste";
	}
}]);