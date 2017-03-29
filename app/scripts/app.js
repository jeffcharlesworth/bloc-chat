(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'RoomsCtrl as rooms',
        templateUrl: '/templates/home.html'
      });
  }

  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config)
})();

(function () {
  function blocChatCookies($cookies, $uibModal, $rootScope) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log($cookies.getAll());
      if (!currentUser || currentUser === '') {
          $rootScope.usernameModalInstance = $uibModal.open({
            backdrop: 'static',
            keyboard: false,
            templateUrl: 'templates/username.html',
            size: 'md'
        })
      }
      else {
        $rootScope.currentUser = true;
      }
  }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$rootScope', blocChatCookies]);
})();
