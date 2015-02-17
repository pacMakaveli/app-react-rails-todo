var ListItems = React.createClass({
  render: function() {
    var listNodes = this.props.data.map(function(list, index) {
      return (
        <List name = { list.name } key = { index }>
          { list.description }
        </List>
      );
    });

    return (
      <div className="list-list">
        { listNodes }
      </div>
    );
  }
});
