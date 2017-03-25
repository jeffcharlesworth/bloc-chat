(function() {
  function Modal($uibModal) {
    var Modal = {};
    var modalInstance = [];
    var modalTemplate = '
    <div class="modalcontainer">
      <h2 class="roominputheading">Create new room</h2>
      <form>
        <p>Enter room name</p>
        <input class="roominput form-control" type="text" ng-model="newChatRoomName" />
      </form>
        <div class="modal-footer">
          <button class="btn" type="button" ng-controller="RoomsCtrl as rooms" ng-click="rooms.new(newChatRoomName)">OK</button>
          <button class="btn" type="button" ng-click="cancel()">Cancel</button>
        </div>
      </script>
    </div>
    ';

    Modal.open = function () {
      modalInstance = $uibModal.open({
          animation: true,
          template: 'newroom.html',
          controller: 'MyModalCtrl',
          size: "sm",
          component: "myModal"
        });
      };

    Modal.close = function () {
      modalInstance.close();
    }

    return Modal;

    }

  angular
    .module('blocChat')
    .factory('Modal', ['$uibModal', Modal]);
})();
