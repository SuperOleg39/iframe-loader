export default angular.module('services.httpInterceptor', [])
    .factory('httpInterceptor', httpInterceptor)
    .name;

function httpInterceptor($q) {
    'ngInject';
    
    return {
        request,
        response,
        responseError
    };

    function request(config) {
        console.log('config');
        return config;
    }
    
    function response(response) {
        console.log('response');
        return response;
    }
    
    function responseError(rejection) {
        console.log('rejection');
        return $q.reject(rejection);
    }
}