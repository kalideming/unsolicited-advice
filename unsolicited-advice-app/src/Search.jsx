import React from "react";

function Search({ searchField, setSearchField }) {

    const handleChange = e => {
        setSearchField(e.target.value)
    };

    return (
        <div>
            <label htmlFor="search">Search Unsolicited Advice:</label>
            <input
                type="text"
                id="search"
                placeholder="Type a keyword to search..."
                onChange={handleChange}
                value={searchField}
            />
        </div>
    );

};

export default Search;