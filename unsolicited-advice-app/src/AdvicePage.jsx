import React, { useState } from "react";
import AdviceList from "./AdviceList";
import Search from "./Search";

function AdvicePage() {
    
    const [searchField, setSearchField] = useState("")
    
    const filteredAdvice = unsolicited.filter((oneUnsolicited) => 
    oneUnsolicited.advice.toLowerCase().includes(searchField.toLowerCase())
);
}

export default AdvicePage;