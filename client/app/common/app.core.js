// import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// import ocLazyLoad from 'oclazyload';
import services from './services';
import components from './components';
import filters from './filters';
import templates from './templates';

export default angular.module('app.core', [
    services,
    components,
    filters,
    templates,
    // uiRouter,
    // ocLazyLoad,
    'ui.router',
    'oc.lazyLoad'
]).name;