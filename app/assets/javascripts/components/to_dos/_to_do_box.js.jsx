var ToDoBox = React.createClass({
  genInitialState: function() {
    return(
      JSON.parse(this.props.presenter)
    );
  },

  handleToDoSubmit: function(data, action) {
    $.ajax({
      data: data,
      url: action,
      type: "POST",
      dataType: "json",
      success: function(data) {
        this.setState({ name: data });
      }.bind(this)
    });
  },

  render: function() {
    return(
      <div className="todo-box">
        <ToDoList />

        <h2>Add a new To Do</h2>
        <ToDoForm form={ this.state.form } onToDoSubmit={ this.handleToDoSubmit } />
      </div>
    );
  }
});
