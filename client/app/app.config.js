function config($stateProvider, $urlRouterProvider) {
    'ngInject';
    let access = false;

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        template: '<a ui-sref="myModule">test</a>'
    });

    if (!access) {
        $stateProvider.state('myModule', {
            url: '/test',
            template: '<my-module></my-module>',
            resolve: {
                loadMyModule: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('./modules/myModule/myModule.module.js').default;
                            $ocLazyLoad.load({name: module.name});
                            resolve(module.component);
                        });
                    });
                }
            }
        });
    }
    console.log(1, $stateProvider)
}

export default config;
