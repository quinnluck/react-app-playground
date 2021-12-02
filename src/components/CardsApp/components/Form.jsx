import React from "react";

class Form extends React.Component{

    state = {
        username: ""
    }

    render(){
        return(
            <form onSubmit={this._handleSubmit}>
                <input 
                    type="text" 
                    placeholder="GitHub username" 
                    value={this.state.username}
                    onChange={ event => this.setState({ username: event.target.value }) } 
                    required 
                />
                <button>Add card</button>
            </form>
        );
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.username)
    }
}

export default Form