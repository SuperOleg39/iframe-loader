export default angular.module('services.myFactory', [])
    .factory('myFactory', myFactory)
    .name;

function myFactory() {
    let sum = 0;

    return {
        calc,
        getSum
    };

    function calc(a, b) {
        sum = a + b;
    }

    function getSum() {
        return sum;
    }
}
