(function() {
  function Messages($firebaseArray, $rootScope) {
    ref = firebase.database().ref().child("messages");
    var Messages = {};


    return Messages;
    }




  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', '$rootScope', Messages]);
})();
