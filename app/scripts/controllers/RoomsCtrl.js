(function() {
  function RoomsCtrl(Rooms, $scope, $uibModal) {
    this.roomsArray = Rooms.all;
    $scope.new = Rooms.create;
    $scope.close = Rooms.closeModal;

  };



  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Rooms', '$scope', '$uibModal', RoomsCtrl]);
})();
