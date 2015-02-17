/**
 * @jsx React.DOM
 */

var ListForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();

    var name = this.refs.name.getDOMNode().value.trim();
    var description = this.refs.description.getDOMNode().value.trim();

    if (!description || !name) {
      return;
    }

    this.props.onListSubmit({
      name: name,
      description: description
    });

    this.refs.name.getDOMNode().value = '';
    this.refs.description.getDOMNode().value = '';
  },

  render: function() {
    return(
      <form className="list-form" onSubmit={ this.handleSubmit }>

        <input type="text" placeholder="To do name" ref="name" />
        <textarea placeholder="To do description..." ref="description"></textarea>

        <input type="submit" value="Create" />
      </form>
    );
  }
});
