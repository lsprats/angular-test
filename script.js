angular.module('listasuper', [])
	.controller('ControladorLista', ['$scope', function($scope){
		$scope.items =[
			{text: 'leche', add: true},
			{text: 'arroz', add: true}
		];

		$scope.agregarItem = function() {
    		$scope.items.push({text: $scope.NuevoItem, add: false});
    		$scope.NuevoItem = '';
  };


	}]);