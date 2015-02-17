var ListForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.getDOMNode().value.trim();
    var description = this.refs.description.getDOMNode().value.trim();

    if (!description || !name) {
      return;
    }

    this.props.onTaskSubmit({
      name: name,
      description: description
    });

    this.refs.name.getDOMNode().value = '';
    this.refs.description.getDOMNode().value = '';
  },

  render: function() {
    return(
      <form className="list-form" onSubmit={ this.handleSubmit }>

        <input type="text" placeholder="Your name" ref="name" />
        <input type="text" placeholder="Say something..." ref="description" />

        <input type="submit" value="Post" />
      </form>
    );
  }
});
