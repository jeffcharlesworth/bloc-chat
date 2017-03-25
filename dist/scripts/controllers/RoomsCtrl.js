(function() {
  function RoomsCtrl(Rooms, $scope, $uibModal, Modal) {
    this.roomsArray = Rooms.all;
    this.new = Rooms.create;
    };


  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Rooms', '$scope', '$uibModal', 'Modal', RoomsCtrl]);
})();
