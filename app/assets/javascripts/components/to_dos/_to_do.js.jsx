var ToDo = React.createClass({
  render: function() {
    return(
      <div>
        <h4>Foo: { this.props.name }</h4>
        <p>{ this.props.description }</p>
      </div>
    )
  }
});
