import React from "react";
export default props => {
     return (
         <div style={{display:"flex",justifyContent:"Center"}}>
     <div onClick={props.toggleComplete} style={{textDecoration: props.todo.complete? "line-through":""}}>
         {props.todo.text}
         
    </div>
    <button onClick={props.handleDelete}>x</button>
    </div>
     )
    }

