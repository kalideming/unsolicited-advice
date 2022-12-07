import React from "react";
import AdviceCard from "./AdviceCard";


function AdviceList({ unsolicited, setUnsolicited }) {

    const mappedUnsolicited = unsolicited.map(oneUnsolicited => {
        return <AdviceCard key={oneUnsolicited.id} unsolicited={oneUnsolicited} />
    });

    return (
        <div class="grid grid-cols-5 grid-rows-5">
            {mappedUnsolicited}
        </div>
        );

};

export default AdviceList;