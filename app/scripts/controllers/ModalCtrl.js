(function() {
  function ModalCtrl ($rootScope, $uibModal) {

      this.open  = function() {
        $rootScope.modalInstance = $uibModal.open({
          templateUrl: 'templates/newroom.html',
          size: 'sm',
          controller: ModalCtrl,
        });
      }
    }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$rootScope','$uibModal', ModalCtrl]);
})();
