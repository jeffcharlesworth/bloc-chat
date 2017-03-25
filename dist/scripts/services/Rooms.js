(function() {
  function Rooms($firebaseArray, $uibModal) {

    var ref = firebase.database().ref().child("rooms");
    var chatRooms = $firebaseArray(ref);

    var Rooms = {
      all: chatRooms,
      create: function(newRoomName) {
        return chatRooms.$add(newRoomName).then(function(ref) {
          var id = ref.key();
          console.log("added record with id " + id);
          list.$indexFor(id); // returns location in the array
        });
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
