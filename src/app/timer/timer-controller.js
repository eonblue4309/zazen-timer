(function() {
    'use strict';

    angular
        .module('app')
        .controller('TimerController', TimerController);

    TimerController.$inject = [];

    /* @ngInject */
    function TimerController() {
        var vm = this;
        vm.title = 'Timer';

        activate();

        ////////////////

        function activate() {
        }
    }
})();