import React from "react";
import style from "./style";

const Greetings = ({ firstName, lastName, email, location, phone, photo, textarea }) => (
    <div style={style.spanGreeting}>
        Photo: {photo} <br />
        Good luck, {firstName} {lastName}! <br />
        Location: {location} <br />
        Phone: {phone} <br />
        Your e-mail adress: {email} <br />
        Additional data: {textarea}
    </div>
);

export default Greetings;