import angular from 'angular';

angular
    .module('app')
    .run(run);

function run($rootScope) {
    $rootScope.hello = 'Hello, app!';

    // require.ensure([], function(require) {
    //     require('./modules/myModule/myModule.module.js');
    // });
}
