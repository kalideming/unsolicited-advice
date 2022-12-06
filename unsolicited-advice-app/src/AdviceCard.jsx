import React from "react";

function AdviceCard({ unsolicited }) {

    return (
        <li className="card">
            <h4>{unsolicited.advice}</h4>
            <p>Topic: {unsolicited.topic}</p>
            <p>Relation to recipient: {unsolicited.relation}</p>
        </li>
    );
};

export default AdviceCard;