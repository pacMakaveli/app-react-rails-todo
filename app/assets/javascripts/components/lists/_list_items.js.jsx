/**
 * @jsx React.DOM
 */

var ListItems = React.createClass({
  render: function() {
    var listNodes = this.props.data.map(function(list) {
      return (
        <List
          owner = { list.owner }
          name = { list.name }
          description = { list.description }
          tasks_count = { list.tasks_count }
          key = { list.id }
        ></List>
      );
    });

    return (
      <div className = "list-items">
        { listNodes }
      </div>
    );
  }
});
