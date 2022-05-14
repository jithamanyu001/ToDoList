//import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';
//import LIST from './components/list';

class App extends Component{
  
 
  render(){

  return (
    <div className='App'>
      <TodoList/>
      
    </div>
  );
  }
}


export default App;
