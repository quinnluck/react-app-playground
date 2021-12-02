import React from "react";
import Card from "./Card.jsx";

const CardList = ({profiles}) => {
    
    return(
        <div>
            {
                profiles.map(profile => {
                    return( <Card {...profile}/> )
                })
            }
        </div>
    );
}

export default CardList