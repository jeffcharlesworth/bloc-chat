(function() {
  function ModalCtrl ($scope, Modal, $uibModal) {
    $scope.open  = function () {
      $uibModal.open({
          animation: true,
          controller: 'MyModalCtrl',
          size: "sm",
          templateUrl: 'templates/newroom.html',
          component: "myModal"
        });
      };

      $scope.close = function () {
        $uibModalWindow.close();
      }
    }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', 'Modal', '$uibModal', 'Rooms', ModalCtrl]);
})();
