(function() {
  function MessageCtrl(Messages, $scope, $firebaseArray, $rootScope) {
    var ref = firebase.database().ref().child("messages");

    $scope.getByRoomId = function (roomId, roomValue) {
      $rootScope.currentRoom  = roomValue;
      $rootScope.messagesArray = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      console.log($scope.currentRoom);
      console.log($scope.messagesArray);
    }
  };



  angular
    .module('blocChat')
    .controller('MessageCtrl', ['Messages', '$scope', '$firebaseArray', '$rootScope', MessageCtrl]);
})();
