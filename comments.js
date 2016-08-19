(function() {

  var app = angular.module('itemComments', []);


  app.controller('CommentController', function(){
    this.comment = {};

    this.addComment = function(item){
      this.comment.createdOn = Date.now();
      item.comments.push(this.comment);
      this.comment = {};
    };
  });


/*
  app.controller('CommentController', [ '$http', function($http){
    this.comment = {};

    this.addComment = function(item){
      this.comment.createdOn = Date.now();
      item.comments.push($http.post('collection-items.json', this.comment));
      this.comment = {};
    };

  }]);



  app.controller('CollectionController', [ '$http', function($http){
    var collection = this;
    collection.items = [];
    
    $http.get('collection-items.json').success(function(data){
      collection.items = data;

    });

  }]);

*/


  app.directive('itemComments', function(){
    return {
      restrict: 'E',
      templateUrl: 'item-comments.html'
    };
  });


})();