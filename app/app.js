
(function (){
	var app = angular.module('restaurant',[
			'ngRoute',
			'restaurant.controller',
			'restaurant.directivas'
		] );



	app.config(['$routeProvider', function($routeProvider){
		$routeProvider

			.when('/',{
				templateUrl:'app/vistas/menu.html'
			})
			.when('/test',{
				templateUrl:'app/vistas/test.html'
			})
			.otherwise({
				redirectTo: '/'
			})
	}]);




})();






