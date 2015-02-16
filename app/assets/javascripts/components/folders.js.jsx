// var FolderBoxAttributes = React.createClass({
//   render: function() {
//     return(
//       <div className="folder">
//         <h2 className="folder-name">{ this.props.name }</h2>
//         <span className="folder-description">{ this.props.description }</span>
//       </div>
//     );
//   }
// });

// var FolderBoxToDosList = React.createClass({
//   render: function() {
//     var todoNodes = this.props.to_dos.map(function(todo, index) {
//       return(
//         <FolderBoxAttributes name={ todo.name } description={ todo.description } key={ index } />
//       );
//     });

//     return(
//       <div className="todoList">
//         { todoNodes }
//       </div>
//     )
//   }
// });

// var FolderBoxToDosBox = React.createClass({
//   getInitialState: function() {
//     return({ to_dos: [] });
//   },

//   componentDidMount: function() {
//     this.loadToDosFromServer(); // API, later on
//   },

//   loadToDosFromServer: function() {
//     $.ajax({
//       url: this.props.url,
//       dataType: 'json',
//       success: function(to_dos) {
//         this.setState({ to_dos: to_dos });
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },

//   handleToDosSubmit: function(to_do) {
//     var toDos = this.state.to_dos;
//     var newToDos = to_dos.concat([to_do]);

//     this.setState({ toDos: newToDos });

//     $.ajax({
//       url: 'folders.json/create',
//       dataType: 'json',
//       type: 'POST',
//       data: { "to_do": to_do },
//       success: function(data) {
//         this.loadToDosFromServer();
//       }.bind(this),
//       error: function(xhr, status, err) {
//         console.error(this.props.url, status, err.toString());
//       }.bind(this)
//     });
//   },

//   render: function() {
//     return(
//       <div className="todo-box">
//         <h1>ToDos</h1>

//         <FolderBoxToDosList to_dos={ this.state.to_dos } />
//         <ToDoForm onToDoSubmit={ this.handleToDosSubmit } />
//       </div>
//     );
//   }
// });

// var ToDoForm = React.createClass({
//   handleSubmit: function() {
//     var name = this.refs.name.getDOMNode().value.trim();
//     var description = this.refs.description.getDOMNode().value.trim();

//     this.props.onToDoSubmit({
//       name: name,
//       description: description
//     });

//     this.refs.name.getDOMNode().value = '';
//     this.refs.description.getDOMNode().value = '';

//     return false;
//   },

//   render: function() {
//     return(
//       <form className="ToDoForm" onSubmit={ this.handleSubmit } >
//         <input type="text" placeholder="Name.." ref="name" />
//         <input type="text" placeholder="Description.." ref="description" />

//         <input type="submit" value="Create" />
//       </form>
//     );
//   }
// });

// var FolderBoxMeta = React.createClass({
//   render: function() {
//     return(
//       <div className="todo-box">
//         <FolderBoxToDosBox url="folders.json" />
//       </div>
//     );
//   }
// });

// var ready = function() {
//   React.render(
//     <FolderBoxMeta />,
//     document.getElementById('folders')
//   );
// }

// $(document).ready(ready);
