/**
 * Created by ATENNA on 30. 12. 2016.
 */

(function(){
    'use strict';
    angular.module('LunchCheck', [])
       .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']; // prevents minifiers from breaking the code

    function LunchCheckController($scope) {
        $scope.lunch = '';
        $scope.result = '';
        $scope.color = 'none';

        $scope.calculate = function() {
            var items = $scope.lunch.split(',');
            $scope.length = items.length;
            if(items.length < 4 ) {
                if(items[0] === '') {
                    $scope.result = 'Please, enter data first';
                    $scope.color = 'red';
                    $scope.border = 'red';
                } else {
                    $scope.result = 'Enjoy!';
                    $scope.color = 'green';
                    $scope.border = 'green';
                }
            } else {
                $scope.result = 'You eat too much!';
                $scope.color = 'green';
                $scope.border = 'green';
            }
        }
    }

})();
