(function() {
  function Rooms($firebaseArray, $uibModal, $rootScope) {

    var ref = firebase.database().ref().child("rooms");
    var chatRooms = $firebaseArray(ref);
    var messagesData = firebase.database().ref().child("messages");
    var currentMessages = [];

    var Rooms = {
      all: chatRooms,
      create: function(newRoomName) {
        newRoomObj = newRoomName;
        console.log(newRoomObj);
        chatRooms.$add(newRoomObj);
        $rootScope.modalInstance.close();
      },
      closeModal: function() {
        $rootScope.modalInstance.close();
      },
      roomFinder: function(value) {
        Rooms.roomId = chatRooms[value].$id;
        console.log(Rooms.roomId);
        Rooms.findMessages(Rooms.roomId);
      },
      findMessages: function(roomId) {
        currentMessages = messagesData.orderByChild("roomId").equalTo(roomId);
        var currentMessagesArray = $firebaseArray(currentMessages);
        console.log(currentMessagesArray);
      }
  };

    Rooms.newChatRoomName = "";

    Rooms.array = function() {
      return chatRooms;
    };

  return Rooms;
}
  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', '$uibModal', '$rootScope', Rooms]);
})();
