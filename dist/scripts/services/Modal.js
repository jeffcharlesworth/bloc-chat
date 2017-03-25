(function() {
  function Modal($uibModal) {
    var Modal = {};
    var modalInstance = [];
/*
    Modal.open = function () {
      modalInstance = $uibModal.open({
          animation: true,
          WindowtemplateUrl: 'templates/newroom.html',
          controller: 'MyModalCtrl',
          size: "sm",
          component: "myModal"
        });
      };
*/
    Modal.close = function () {
      modalInstance.close();
    }

    return Modal;

    }

  angular
    .module('blocChat')
    .factory('Modal', ['$uibModal', Modal]);
})();
