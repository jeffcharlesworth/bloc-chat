(function() {
  function Messages($firebaseArray, $rootScope) {
    ref = firebase.database().ref().child("messages");
    var messageArray = $firebaseArray(ref);
    var Messages = {};

    Messages.getTime = function() {
      var now = new Date();
      var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
      var time = [now.getHours(), now.getMinutes(), now.getSeconds()];

      var timestamp = date.join('/') + " " + time.join(":");
      return timestamp;
    }


    return Messages;
    }




  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$rootScope', Messages]);
})();
