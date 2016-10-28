import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myModuleComponent from './myModule.component.js';

angular.module('myModule', [
        uiRouter
    ])
    .config(config)
    .component('myModule', myModuleComponent);

function config($stateProvider) {
    $stateProvider.state('myModule', {
        url: '/',
        component: 'myModule'
    });
    console.log(2, $stateProvider)
}