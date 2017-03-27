(function() {
  function Rooms($firebaseArray, $uibModal) {

    var ref = firebase.database().ref().child("rooms");
    var chatRooms = $firebaseArray(ref);

    var Rooms = {
      all: chatRooms,
      create: function(newRoomName) {
        newRoomObj = newRoomName;
        console.log(newRoomObj);
        chatRooms.$add(newRoomObj);
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
    .factory('Rooms', ['$firebaseArray', '$uibModal', Rooms]);
})();
