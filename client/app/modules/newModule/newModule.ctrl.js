function NewModuleCtrl($rootScope) {
    'ngInject';    
    this.hello = $rootScope.hello;

    this.clickHandler = () => {
        console.log('Clicked!');
    }
}

export default NewModuleCtrl;