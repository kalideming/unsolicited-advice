import React from "react";
import AdviceCard from "./AdviceCard";

function AdviceList({ unsolicited, setUnsolicited }) {

    const mappedUnsolicited = unsolicited.map(oneUnsolicited => {
        return <AdviceCard key={oneUnsolicited.id} unsolicited={oneUnsolicited} />
    });

    return <ul className="cards">{mappedUnsolicited}</ul>;

};

export default AdviceList;