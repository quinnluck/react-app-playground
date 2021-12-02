import React from "react";
import "../CardsApp.css"

class Card extends React.Component {

    render() {
        let { name, company, avatar_url } = this.props;

        return (
            <div className="github-profile">
                <img src={avatar_url} alt="" />
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="company">{company}</div>
                </div>
            </div>
        );
    }
}

export default Card