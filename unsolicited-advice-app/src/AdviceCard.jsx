import React from "react";

function AdviceCard({ unsolicited }) {

    return (
        <div>
            <div>
                <span>Topic: {unsolicited.topic}</span>
                <span>Relation to recipient: {unsolicited.relation}</span>
            </div> 
            <span>{unsolicited.advice}</span>
        </div>
    );
};

export default AdviceCard;