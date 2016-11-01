webpackJsonp([1],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _angularUiRouter = __webpack_require__(4);

	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);

	var _myModuleComponent = __webpack_require__(8);

	var _myModuleComponent2 = _interopRequireDefault(_myModuleComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _angular2.default.module('myModule', [_angularUiRouter2.default]).config(config).component('myModule', _myModuleComponent2.default);


	function config($stateProvider) {
	    // $stateProvider.state('myModule', {
	    //     url: '/',
	    //     component: 'myModule',
	    //     resolve: {
	    //         loadMyModule: ($q) => {
	    //             return $q((resolve) => {
	    //                 require.ensure([], () => {
	    //                     let component = require('./home');
	    //                 });
	    //             })
	    //         }
	    //     }
	    // });
	    console.log(2, $stateProvider);
	}

/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var myModuleComponent = {
	    template: '<h1 ng-click="$ctrl.clickHandler()">\n        {{$ctrl.hello}}\n        <a ui-sref="home">home</a>\n    </h1>',
	    controller: myModuleCtrl
	};

	function myModuleCtrl($rootScope) {
	    this.hello = $rootScope.hello;

	    this.clickHandler = function () {
	        console.log('Clicked!');
	    };
	}

	exports.default = myModuleComponent;

/***/ }

});