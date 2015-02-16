var ToDoList = React.createClass({
  render: function() {
    var todoNodes = this.props.to_dos.map(function(todo) {
      return(
        <ToDo name={ todo.name } description={ todo.description } key={ todo.id } />
      );
    });

    return(
      <div className="todo-list">
        { todoNodes }
      </div>
    );
  }
});
