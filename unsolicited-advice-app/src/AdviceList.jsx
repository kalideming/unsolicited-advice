import React from "react";
import AdviceCard from "./AdviceCard";


function AdviceList({ unsolicited, setUnsolicited }) {

    const mappedUnsolicited = unsolicited.map(oneUnsolicited => {
        return <AdviceCard key={oneUnsolicited.id} unsolicited={oneUnsolicited} />
    });

    return (
        <div class="self-center items-center">
            <div class="grid grid-cols-3 grid-rows-9 m-11">
                {mappedUnsolicited}
            </div>
        </div>
        );

};

export default AdviceList;