import angular from 'angular';
import core from 'app/common';
import homeComponent from './home.component';

export default angular.module('app.home', [core])
    .config(config)
    .run(run)
    .component('home', homeComponent)
    .name;

function config() {

}

function run() {

}
