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
              <div className="grid-cell grid-cell-sm-9">
                <div className="list-cell-name">
                  <h2 className="list-name">
                    { this.props.name }
                    <span className="list-user">by { this.props.owner }</span>
                  </h2>
                </div>

              </div>

              <div className="grid-cell grid-cell-sm-3">
                <ListActions />
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
