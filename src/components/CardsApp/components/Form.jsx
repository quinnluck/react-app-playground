import React from "react";
import axios from "axios";

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

    _handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get(`https://api.github.com/users/${this.state.username}`);
        this.props.onSubmit(response.data);
        this.setState({ username: "" });
    }
}

export default Form