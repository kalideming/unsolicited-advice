import React, { useState } from "react";
import AdviceList from "./AdviceList";
import Search from "./Search";

function AdvicePage({ unsolicited, setUnsolicited }) {
    
    const [searchField, setSearchField] = useState("")
    
    const filteredAdvice = unsolicited.filter((oneUnsolicited) => 
    oneUnsolicited.advice.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <main>
            <Search searchField={searchField} setSearchField={setSearchField} />
            <AdviceList unsolicited={filteredAdvice} setUnsolicited={setUnsolicited} />
        </main>
    );

};

export default AdvicePage;