import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
let [keyword, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response);
}

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);

        //documentation: https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function updateKeyword (event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" className="Search-Bar" placeholder="Type a word" autoFocus={true} onChange={updateKeyword} />
            </form>
        </div>
    )
}