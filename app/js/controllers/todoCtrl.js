todo.controller('TodoCtrl', function TodoCtrl($scope, todoStorage) {
  $scope.todos = todoStorage.get();

  $scope.returnTotalTodos = function () {
    return $scope.todos.length;
  }

  $scope.addNewItem = function () {
    if ($scope.newTodoText.length) {
      $scope.todos.push( {todoItem: $scope.newTodoText, done: false} )
      $scope.newTodoText = '';
      todoStorage.put(todos)
    }
  }

  $scope.clearFinishedTodos = function () {
    $scope.todos = _.reject($scope.todos, function (todo) {
      return todo.done
    })
  }

  $scope.$watch('todos', function (newValue, oldValue) {
    if (newValue !== oldValue)
      todoStorage.put($scope.todos)
  }, true);

});
