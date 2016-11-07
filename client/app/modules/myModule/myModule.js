import core from 'app/common/app.core';
import myModuleService from './myModule.service';
import myModuleComponent from './myModule.component';

let myModule = angular.module('myModule', [core])
    .config(config)
    .run(run);

myModule
    .service('myModuleService', myModuleService)
    .component('myModule', myModuleComponent);

function config() {
    console.log('config myModule');
}

function run() {
    console.log('run myModule');
}

export default myModule.name;
