// create the module and name it app
var app = angular.module('app', ['ngRoute', 'ngResource']);

// global variables
app.run(function($rootScope) {
    $rootScope.balance = 7000;
    $rootScope.users = {
        users: []
    };

});

//-------------------------------------------------------- configur the routs
app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController'
        })
        // route for the home page
        .when('/balance', {
            templateUrl: 'views/balance.html',
            controller: 'balanceController'
        })
        // route for the search page
        .when('/statement', {
            templateUrl: 'views/statement.html',
            controller: 'statementsController'
        })
        // list page
        .when('/payee', {
            templateUrl: 'views/payee.html',
            controller: 'payeeController'
        })
        .when('/crpayee', {
            templateUrl: 'views/crpayee.html',
            controller: 'crpayeeController'
        })
        // route for the search page
        .when('/payment', {
            templateUrl: 'views/payment.html',
            controller: 'paymentController'
        })
        // default page
        .otherwise({
            redirectTo: '/balance'
        });
});


//-------------------------------------------------------- configur the controllers
app.controller('mainController', ['$scope', '$location',
    function($scope, $location) {
        $location.path("#/balance");
    }
]);
app.controller('balanceController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        // root vars
        $scope.root = $rootScope;
    }
]);
app.controller('payeeController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        // root vars
        $scope.root = $rootScope;

        var m,n,l;
        $scope.yy = function(key, user) {
            console.log(user);
            user.name = $rootScope.users.users[key].name;
            user.acc = $rootScope.users.users[key].acc;
            user.iban = $rootScope.users.users[key].iban;
        };
        $scope.xx = function(key, user) {
            console.log(user);
            $rootScope.users.users[key].name = user.editname;
            $rootScope.users.users[key].acc = user.editaccount;
            $rootScope.users.users[key].iban = user.editiban;
        };
    }
]);
app.controller('crpayeeController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        // root vars
        $scope.root = $rootScope;
        $scope.showScuccess = false;
        $scope.submitform = function() {
            var obj = {
               name: $scope.inputName,
               acc: $scope.inputAccount,
               iban: $scope.IBAN
            };
            $rootScope.users.users.push(obj);
            $scope.showScuccess = true;
            $scope.inputName = '';
            $scope.inputAccount = '';
            $scope.IBAN = '';
        };
    }
]);
app.controller('statementController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        // root vars
        $scope.root = $rootScope;
    }
]);
app.controller('paymentController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        // root vars
        $scope.root = $rootScope;
    }
]);
