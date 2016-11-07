import core from 'app/common/app.core';
import newModuleService from './newModule.service';
import newModuleComponent from './newModule.component';

let newModule = angular.module('newModule', [core])
    .config(config)
    .run(run);

newModule
    .service('newModuleService', newModuleService)
    .component('newModule', newModuleComponent);

function config() {
    console.log('config newModule');
}

function run() {
    console.log('run newModule');
}

export default newModule.name;
