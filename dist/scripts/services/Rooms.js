(function() {
  function Rooms($firebaseArray, $uibModal) {

    var ref = firebase.database().ref().child("rooms");
    var chatRooms = $firebaseArray(ref);

    var Rooms = {
      all: chatRooms,
      create: function(newRoomName) {
        console.log(newRoomName);
        chatRooms.$add(newRoomName);
      }

    };

    Rooms.newChatRoomName = "";

    Rooms.array = function() {
      return chatRooms;
    };

    Rooms.json = function() {
    return {
      all: chatRooms
    }
   };

  return Rooms;
}
  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', '$uibModal', Rooms]);
})();
