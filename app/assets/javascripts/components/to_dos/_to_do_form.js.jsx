var ToDoForm = React.createClass({
  handleSubmit: function (event) {
    event.preventDefault();

    var name = this.refs.name.getDOMNode().value.trim();
    var description = this.refs.description.getDOMNode().value.trim();

    if (!name || !description) {
      return false;
    }

    var formData = $(this.refs.form.getDOMNode()).serialize();
    this.props.onToDoSubmit(formData, this.props.form.action);

    this.refs.description.getDOMNode().value = "";
    this.refs.name.getDOMNode().value = "";
  },

  render: function() {
    return(
      <form ref="form" className="todo-form" action={ this.props.form.action } accept-charset="UTF-8" method="POST" onSubmit={ this.handleSubmit } >
        <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />

        <input ref="name" type="text" name="todo[name]" placeholder="Name.." />
        <textarea ref="description" name="todo[description]" placeholder="Description.."></textarea>

        <input type="submit" value="Create To Do" />
      </form>
    )
  }
});
