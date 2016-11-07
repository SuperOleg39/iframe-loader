function MyModuleCtrl($rootScope) {
    'ngInject';    
    this.hello = $rootScope.hello;
    this.hi = 'Origato';

    this.clickHandler = () => {
        console.log('Clicked!');
    }
}

export default MyModuleCtrl;