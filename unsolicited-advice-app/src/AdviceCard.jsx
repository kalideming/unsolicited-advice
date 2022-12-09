import React from "react";

function AdviceCard({ unsolicited }) {

    return (
        <div class="m-8 bg-black bg-opacity-90 border-black rounded-xl text-white">
            <div class="text-start font-PatrickHandSC text-md">
                <div class="px-1 font-PatrickHandSC text-md">Topic: {unsolicited.topic}</div>
                <div class="px-1 font-PatrickHandSC text-sm">Relation to Recipient: {unsolicited.relation}</div>
            </div> 
            <div class="text-center font-NanumBrushScript text-2xl break-words">
                {unsolicited.advice}
            </div>
        </div>
    );
};

export default AdviceCard;