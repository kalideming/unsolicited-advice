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
            <div>
                <Search searchField={searchField} setSearchField={setSearchField} />
            </div>
            <div class="relative">
                <AdviceList unsolicited={filteredAdvice} setUnsolicited={setUnsolicited}/>
            </div>
        </main>
    );

};

export default AdvicePage;