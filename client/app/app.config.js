function config($stateProvider, $urlRouterProvider, $httpProvider) {
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
                module: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('app/modules/myModule/myModule.js').default;
                            $ocLazyLoad.load({name: module});
                            resolve(module);
                        });
                    });
                }
            }
        });
    }
    
    if (!access) {
        $stateProvider.state('newModule', {
            url: '/new',
            template: '<new-module></new-module>',
            resolve: {
                module: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            let module = require('app/modules/newModule/newModule.js').default;
                            $ocLazyLoad.load({name: module});
                            resolve(module);
                        });
                    });
                }
            }
        })
    }
    
    console.log(1, $stateProvider)

    $httpProvider.interceptors.push('httpInterceptor');
}

export default config;
