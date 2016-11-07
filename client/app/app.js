// import angular from 'angular';
import core from './common/app.core';
import config from './app.config';
import run from './app.run';

angular.module('app', [core])
    .config(config)
    .run(run);
