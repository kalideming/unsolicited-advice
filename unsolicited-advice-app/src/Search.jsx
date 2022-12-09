import React from "react";

function Search({ searchField, setSearchField }) {

    const handleChange = e => {
        setSearchField(e.target.value)
    };

    return (
        <div class="bg-black h-15">
            <label class="text-white font-Barriecito text-xl"htmlFor="search">Rifle Through The Shit:  </label>
            <input
                class="rounded-lg text-md w-56 font-NanumBrushScript"
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