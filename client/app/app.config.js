function config($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        });

    $urlRouterProvider.otherwise('/');
}

export default config;
