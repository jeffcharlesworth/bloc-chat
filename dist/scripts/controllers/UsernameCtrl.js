(function() {
  function UsernameCtrl($scope, $cookies, $rootScope) {
    var currentUser = $cookies.get('blocChatCurrentUser');

    $scope.setUsername = function(username) {
      var whitespace = 0;
      if (username == null) {
        return alert("Please enter a username");
      }
      for (var i = 0; i < username.length; i++) {
        if (username[i] === ' ') {
          whitespace++;
        }
      };
      if (username.length > 3 && whitespace === 0) {
        $cookies.put('blocChatCurrentUser', username);
        $rootScope.usernameModalInstance.close();
        $rootScope.currentUser = true;
      } else if (whitespace > 0) {
        alert("Usernames cannot include whitespace");
      }
      else {
        alert("You must choose a username that is four or more characters");
      }
    }
  };

  angular
    .module('blocChat')
    .controller('UsernameCtrl', ['$scope', '$cookies', '$rootScope', UsernameCtrl]);
})();
