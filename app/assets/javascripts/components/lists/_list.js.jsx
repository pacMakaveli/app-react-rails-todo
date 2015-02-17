/**
 * @jsx React.DOM
 */

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var List = React.createClass({
  render: function() {
    return(
      <div className="grid">
        <div className="grid-cell grid-cell-sm-11">
          <div className="list">
            <div className="grid">
              <div className="list-cell-name">
                <h2 className="list-name">{ this.props.name }</h2>
              </div>

              <div className="list-cell-user">
                <span className="list-user">{ this.props.owner }</span>
              </div>
            </div>

            <div className="grid">
              <div className="list-cell-description">
                <p className="list-description">{ this.props.description }</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-cell grid-cell-sm-1 grid-cell-content-center">
          <span className="list-tasks-count">{ this.props.tasks_count }</span>
        </div>
      </div>
    );
  }
});

$(function() {
  React.render(
    <ListBox url="/lists.json" />,
    document.getElementById('lists')
  );
});
