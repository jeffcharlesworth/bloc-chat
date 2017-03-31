(function() {
  function MessageCtrl(Messages, $scope, $firebaseArray, $rootScope, $cookies) {
    var ref = firebase.database().ref().child("messages");

    $scope.getByRoomId = function (roomId, roomValue) {
      $rootScope.roomIdHold = roomId;
      $rootScope.currentRoom  = roomValue;
      $rootScope.messagesArray = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      console.log($scope.currentRoom);
      console.log($scope.messagesArray);
    }
    $rootScope.send = function(newMessage) {
      console.log(newMessage);
      console.log($cookies.get('blocChatCurrentUser'));
       var newMessageObj = {
        content: newMessage,
        roomId: $rootScope.roomIdHold,
        sentAt: Messages.getTime(),
        username: $cookies.get('blocChatCurrentUser')
      }
      console.log(newMessageObj);

      return $firebaseArray(ref).$add(newMessageObj);
    };

  }





  angular
    .module('blocChat')
    .controller('MessageCtrl', ['Messages', '$scope', '$firebaseArray', '$rootScope', '$cookies', MessageCtrl]);
})();
