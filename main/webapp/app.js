var app=angular.module('app', ['ui.router', 'ngStorage', 'ui.bootstrap', 'ngTouch'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/welcome');
	$stateProvider
	.state('hello',{
		abstract: true,
		views: {
			'':{
				templateUrl: 'views/hello.html'	
			}
		}
	})
	.state('hello.welcome',{
		url: '/welcome',
		templateUrl: 'views/welcome.html'
	})
	.state('hello.login',
	{
		url: '/login',
		templateUrl: 'views/login.html'
	})
	.state('app', {
		abstract: true,
		views:{
			'':{
				templateUrl: 'views/layout.html'
			}
			
		}
	})
	.state('app.home',{
		url:'/home',
		templateUrl:'views/home.html',
		controller: 'homeController'
	})
	.state('app.reporte',{
		url:'/reporte',
		templateUrl:'views/reporte.html',
	})
		.state('app.registro',{
		url:'/registro',
		templateUrl:'views/registro.html',
		controller:'registroController'
	})

	.state('app.MiEstado',{
		url:'/MiRuta',
		templateUrl:'views/MiVista.html',
		controller:'NombreDeMiController'
	});
	


}]);