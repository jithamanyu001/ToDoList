import React from "react";
export default class searchbar extends React.Component{
    render(){
        return(
            <div>
                <input onChange={this.handleChange} value="Search:"></input>
            </div>
        )
    }
}