import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myModuleComponent from './myModule.component.js';

export default angular.module('myModule', [uiRouter])
    .config(config)
    .component('myModule', myModuleComponent);

function config($stateProvider) {
    // $stateProvider.state('myModule', {
    //     url: '/',
    //     component: 'myModule',
    //     resolve: {
    //         loadMyModule: ($q) => {
    //             return $q((resolve) => {
    //                 require.ensure([], () => {
    //                     let component = require('./home');
    //                 });
    //             })
    //         }
    //     }
    // });
    console.log(2, $stateProvider)
}
