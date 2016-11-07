import myFactory from './myFactory.factory';
import httpInterceptor from './httpInterceptor.factory';

export default angular.module('services', [
    myFactory,
    httpInterceptor
]).name;