/**
 * @jsx React.DOM
 */

var ListActions = React.createClass({
  handleListUpdate: function(list) {
   $.ajax({
      type: "PUT",
      url: "/lists/edit/" + list.id,
      data: { lists: list },
      success: function(data) {
        this.setState({ data: data });
      },
      failure: function(data) {
        console.error(this.props.url, status, err.toString());
      }
    });
  },

  handleListDelete: function(list) {
    $.ajax({
      type: "DELETE",
      url: "/lists/" + list.id,
      data: { lists: list },
      success: function(data) {
        alert('asdasda');
        this.setState({ data: data });
      },
      failure: function(data) {
        console.error(this.props.url, status, err.toString());
      }
    });
  },

  render: function() {
    return(
      <div className="list-actions">
        <a href="#" onClick={ this.handleListUpdate } className="button"><i className="fa fa-pencil"></i></a>
        <a href="#" onClick={ this.handleListDelete } className="button"><i className="fa fa-trash-o"></i></a>
      </div>
    );
  }
});
