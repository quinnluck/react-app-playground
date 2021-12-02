import React from "react";
import "../CardsApp/CardsApp.css";
import CardList from "./components/CardList.jsx";
import Form from "./components/Form";

//Github usernames: gaearon, sophiebits, sebmarkbage, bvaughn, quinnluck


class CardsApp extends React.Component {

    state = {
        profiles: []
    }

    render(){
        return(
            <div className="header">
                <Form onSubmit={this._addNewProfile}/>
                <CardList profiles={this.state.profiles} />
            </div>
        );
    }

    _addNewProfile = (profileData) => {
        this.setState(prevState => ({ profiles: [ ...prevState.profiles, profileData ]}))
        console.log("CardsApp", profileData);
    }
}

export default CardsApp
