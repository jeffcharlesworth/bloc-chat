(function() {
  function RoomsCtrl(Rooms) {
    this.roomsArray = Rooms.array();
  }
  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Rooms', RoomsCtrl]);
})();
