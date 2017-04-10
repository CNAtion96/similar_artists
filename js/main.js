(function() {
    'use strict';

    angular
    .module('artistSearch', ['ui.router','ngSanitize'])
    .config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider){
        
        $urlRouterProvider.otherwise('/home')
    	$stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../partials/home.html',
                controller: 'infoController',
                controllerAs: 'vm'
            })

         $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://api.soundcloud.com/**'
        ])
    });
})();