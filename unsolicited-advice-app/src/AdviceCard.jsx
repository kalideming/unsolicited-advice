import React from "react";

function AdviceCard({ unsolicited }) {

    return (
        <div class="m-8">
            <div class="text-start">
                <span class="px-1">Topic: {unsolicited.topic}</span>
                <span class="px-1">Relation to Recipient: {unsolicited.relation}</span>
            </div> 
            <div class="text-center">
                {unsolicited.advice}
            </div>
        </div>
    );
};

export default AdviceCard;