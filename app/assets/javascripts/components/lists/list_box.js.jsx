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

  handleListSubmit: function(comment) {
    var comments = this.state.data;
        comments.push(comment)

    this.setState({ data: comments }, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: { list: comment },
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
    setInterval(this.loadListsFromServer, this.props.pollInterval);
  },

  render: function() {
    return(
      <div className="list-box">
        <ListItems data={ this.state.data } />
        <ListForm onTaskSubmit={ this.handleListSubmit } />
      </div>
    );
  }
});
