import React from "react";
import "../CardsApp.css"

/* api.github.com/users/<username> */

class Card extends React.Component {

    render() {
        let { name, company, avatar_url } = this.props;

        return (
            <div className="github-profile">
                <img src={avatar_url} />
                <div className="info">
                    <div className="name">{name}</div>
                    <div className="company">{company}</div>
                </div>
            </div>
        );
    }
}

export default Card