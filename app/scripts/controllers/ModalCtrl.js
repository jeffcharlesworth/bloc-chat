(function() {
  function ModalCtrl ($scope, Modal, $uibModal) {
    $scope.open  = Modal.open();

    $scope.close = function () {
        $uibModalWindow.close();
      }
    }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', 'Modal', '$uibModal', 'Rooms', ModalCtrl]);
})();
