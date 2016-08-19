(function() {

  var app = angular.module('itemTabs', []);

  app.directive('itemTabs', function(){
    return {
      restrict: 'E',
      templateUrl: 'item-tabs.html',
      controller: function(){
        this.tab = 1;
        this.isSet = function(checkTab) {
          return this.tab === checkTab;
        };
        this.setTab = function(setTab) {
          this.tab = setTab;
        };
      },
      controllerAs: 'tab'
    };
  });


})();