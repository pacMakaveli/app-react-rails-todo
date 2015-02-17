var List = React.createClass({
  render: function() {
    return(
      <div className="list">
        <h2 className="list-name">{ this.props.name }</h2>
        <p className="list-description">{ this.props.description }</p>
      </div>
    );
  }
});

React.render(
  <ListBox url="/lists.json" pollInterval={ 2000 } />,
  document.getElementById('lists')
);
