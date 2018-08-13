import React, {Component} from 'react';

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      todos: []
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  changeHandler(e){
    console.log('e: ', e);
    this.setState({
      input: e.target.value
    })
  }

  submitHandler = () => {
    this.setState({
      todos: [...this.state.todos, this.state.input],
      input: ''
    })
  }

  removeHandler(i) {
    let newArr = this.state.todos.slice();
    newArr.splice(i, 1);
    this.setState({
      todos: newArr
    })
  }

  render() {
    console.log(this.state);

    let todoList = this.state.todos.map((todo, i) => {
      return (
        <div key={i}>
          <p>{todo}</p>
          <button onClick={() => this.removeHandler(i)}>delete</button>
        </div>
      )
    })

    return (
      <div>
        <h1>Todos:</h1>
        <input type="text" value={this.state.input} onChange={(e) => this.changeHandler(e)}/>
        <button onClick={this.submitHandler}>Add todo</button>
        <div>{todoList}</div>
      </div>
    )
  }
}

export default Todo;