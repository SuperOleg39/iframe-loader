import angular from 'angular';
import core from './common';
import config from './app.config.js';
import run from './app.run.js';
import appComponent from './app.component';
import home from './pages/home';

angular.module('app', [
    core,
    home
])
    .config(config)
    .run(run)
    .component('app', appComponent);
