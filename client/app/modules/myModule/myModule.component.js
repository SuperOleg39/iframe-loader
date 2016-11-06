let myModuleComponent = {
    template: require('./myModule.tmpl.html'),
    controller: myModuleCtrl
};

function myModuleCtrl($rootScope, myModuleService) {
    'ngInject';
    this.hello = $rootScope.hello;

    this.clickHandler = () => {
        console.log('Clicked!')
    };

    console.log(myModuleService.getSum());
    myModuleService.calc(5, 7);
    console.log(myModuleService.getSum());
}

export default myModuleComponent;
