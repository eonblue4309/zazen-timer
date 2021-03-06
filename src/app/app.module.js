(function(){
  angular.module('app', [
      'ui.router'
    ])
    .config(Config);

  /* ngInject */
  function Config($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        template: 'Zazen home'
      })
      .state('timer', {
        url: '/timer',
        templateUrl: 'src/app/timer/timer.template.html',
        controller: 'TimerController as vm'
      })
      .state('configuration', {
        url: '/configuration',
        template: 'zazen configuration'
      });

    $urlRouterProvider.otherwise('/');
  }
})();