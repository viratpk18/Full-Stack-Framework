angular.module('todoApp', [])
  .controller('TodoController', function($scope, $http) {
    $scope.todos = [];

    // Load existing tasks
    $http.get('/api/todos').then(function(response) {
      $scope.todos = response.data;
    });

    // Add task
    $scope.addTask = function() {
      $scope.todos.push($scope.newTask);
      $scope.newTask = '';
      saveData();
    };

    // Remove task
    $scope.removeTask = function(index) {
      $scope.todos.splice(index, 1);
      saveData();
    };

    // Save to JSON file via backend
    function saveData() {
      $http.post('/api/todos', $scope.todos);
    }
  });
