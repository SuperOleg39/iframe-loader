function myModuleService() {
    let sum = 0;

    this.calc = (a, b) => {
        sum = a + b;
    };

    this.getSum = (a, b) => {
        return sum;
    };
}

export default myModuleService;
