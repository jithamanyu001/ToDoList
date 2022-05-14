import React,{Component} from "react";
import shortid from "shortid";
export default class TodoForm extends Component{
   state={
       text:""
   }
   handleChange=(event)=>{
       this.setState({[event.target.name]:event.target.value})
       
   }
   handleSubmit=(event)=>{
       event.preventDefault();
       this.props.onSubmit({
           text: this.state.text,
           id: shortid.generate(),
           complete: false
       })
       this.setState({
           text: ""
       })
   }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="text" value={this.state.text}  type="text" placeholder="Todo.." onChange={this.handleChange}></input>
                <button onClick={this.handleSubmit}>Add Todo</button>
            </form>
        );
    }
}