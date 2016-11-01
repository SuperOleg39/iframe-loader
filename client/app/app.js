import angular from 'angular';
import uiRouter from 'angular-ui-router';
import oclazyload from 'oclazyload';

angular
    .module('app', [
        uiRouter,
        oclazyload
    ]);
