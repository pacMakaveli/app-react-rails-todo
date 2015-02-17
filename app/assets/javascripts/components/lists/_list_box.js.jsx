/**
 * @jsx React.DOM
 */

var ListBox = React.createClass({
  loadListsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleListSubmit: function(list) {
    var lists = this.state.data;
        lists.push(list);

    this.setState({ data: lists }, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: { list: list },
        success: function(data) {
          this.setState({ data: data });
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
  },

  getInitialState: function() {
    return { data: []};
  },

  componentDidMount: function() {
    this.loadListsFromServer();
  },

  render: function() {
    return(
      <div className="list-box">
        <ListItems data={ this.state.data } />
        <ListForm onListSubmit={ this.handleListSubmit } />
      </div>
    );
  }
});
