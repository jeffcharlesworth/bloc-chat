(function() {
  function Rooms($firebaseArray) {
    var Rooms = {};
    var ref = firebase.database().ref().child("rooms");
    var chatRooms = $firebaseArray(ref);


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
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();
