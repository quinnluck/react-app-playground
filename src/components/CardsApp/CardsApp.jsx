import React, { useState } from "react";
import "../CardsApp/CardsApp.css";
import CardList from "./components/CardList.jsx";
import Form from "./components/Form";

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardsApp = () => {
    const [profiles, setProfiles] = useState(testData);

    return(
        <div className="header">
            <Form />
            <CardList profiles={profiles} />
        </div>
    );
}

export default CardsApp
