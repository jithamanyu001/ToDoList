import React, { Component } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
export default class TodoList extends Component{
    
    state={
        todos:[],
        show: "all",
        crossAll: true,
        searchInput:""
    }
    addTodo=(todo)=>{
        this.setState({
            todos: [todo,...this.state.todos]
        })
    }
    toggleComplete=(id)=>{
        this.setState({
            todos: this.state.todos.map(todo=>{
                if(todo.id===id){
                    return{
                        text:todo.text,
                        id:todo.id,
                        complete:!todo.complete
                    }
                }
                else return todo
            })
        })
        
    }

    updateToShow= (event) =>{
        this.setState({
            show: event.target.value
        })
    }
    deleteTodo=(id)=>{
        this.setState({
            todos: this.state.todos.filter(todo=>todo.id !== id)
        })
    }
    deleteAllDone=()=>{
        this.setState({
            todos: this.state.todos.filter(todo=>!todo.complete)
        })
    }
    crossIt=()=>{
        this.setState({
            todos: this.state.todos.map(todo=>({
                ...todo,
                complete: this.state.crossAll
            })),
            crossAll: !this.state.crossAll
        })
    }
    handleChange=(event)=>{
        this.setState({
            searchInput: event.target.value
        })
    }

    render(){
        var todos=[];
        if(this.state.searchInput.length>0){
            todos=this.state.todos.filter(
                todo=> todo.text.match(this.state.searchInput)
            )
        }
        else{
            todos=this.state.todos
        }
        
        if (this.state.show==="active"){
            todos=todos.filter(todo=>!todo.complete)
        }
        else if(this.state.show==="complete"){
            todos=todos.filter(todo=>todo.complete)
        }
        return(
            <div>
            <TodoForm onSubmit={this.addTodo}/>
            <div>
                <input type="text" placeholder="Search" onChange={this.handleChange}></input>
            </div>
            <div>Todos left: {this.state.todos.filter(todo => !todo.complete ).length}</div>
            <div style={{display: this.state.todos.filter(todo => todo.complete ).length > 0 ? "":"none" }}>
                <button onClick={this.deleteAllDone}>Delete all done</button>
            </div>
            <div>
                <select onChange={this.updateToShow} >
                    <option selected value="all">All</option>
                    <option value="active">Active</option>
                    <option value="complete">Completed</option>
                </select>
            </div>
            <div>
                <button onClick={this.crossIt}>Cross all: {`${this.state.crossAll}`}</button></div>
            {console.log(todos)}
            {todos.map(
                todo => <Todo key={todo.id} handleDelete={()=>this.deleteTodo(todo.id)} toggleComplete={()=>this.toggleComplete(todo.id)} todo={todo}/>)
                }
                
            </div>
        );
    }
}