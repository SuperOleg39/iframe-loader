import angular from 'angular';
import myModuleComponent from './myModule.component.js';
import myModuleService from './myModule.service.js';

let myModule = angular.module('myModule', [])
    .config(config)
    .run(run)
    .service('myModuleService', myModuleService)
    .component('myModule', myModuleComponent);

function config($stateProvider) {
    'ngInject';
    console.log(2, $stateProvider)
}

function run() {
    console.log(3)
}

export default myModule;
