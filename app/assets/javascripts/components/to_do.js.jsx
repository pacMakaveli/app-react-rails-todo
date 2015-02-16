var ToDo = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    description: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Description: {this.props.description}</div>
      </div>
    );
  }
});
