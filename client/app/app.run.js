angular
    .module('app')
    .run(run);

function run($rootScope) {
    console.log(111)
    $rootScope.hello = 'Hello, app!';
}