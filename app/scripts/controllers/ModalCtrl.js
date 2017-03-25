(function() {
  function ModalCtrl ($scope, $uibModal) {

      this.open  = function() {
        $uibModal.open({
          templateUrl: 'templates/newroom.html',
          size: 'sm',
          controller: ModalCtrl
        });
      }
    }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope','$uibModal', 'Rooms', ModalCtrl]);
})();
