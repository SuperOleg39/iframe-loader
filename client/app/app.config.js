import angular from 'angular';

angular
    .module('app')
    .config(config);

function config($stateProvider, $urlRouterProvider) {    
    $urlRouterProvider.otherwise('/');
    console.log(1, $stateProvider)
}