function newModuleService() {
    let sum = 0;

    this.calc = (a, b) => {
        sum = a + b;
    };

    this.getSum = () => sum;
}

export default newModuleService;