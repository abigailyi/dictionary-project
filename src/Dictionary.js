import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
let [keyword, setKeyword] = useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
    setResults(response.data[0]);
}

function handlePexelsResponse(response) {
setPhotos(response.data.photos);
}

function load() {
    setLoaded(true);
    search();
}

function search() {
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsKey = `563492ad6f9170000100000120fab7ab7ff549ab95ba2eb001be1778`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {"Authorization" : `Bearer ${pexelsKey}`};
axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse)};

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateKeyword (event) {
        setKeyword(event.target.value);
    }
    
if (loaded) {

    return (
        <div className="Dictionary">
            <div className="body-bg">
            <section>
                <h3 className="fs-5">Hoot! What word do you want to look up?</h3>
            <form onSubmit={handleSubmit}>
                <input type="search" className="Search-Bar" placeholder="Type a word" autoFocus={true} onChange={updateKeyword} />
                <br /><sub>Suggestions: galaxy, flower, rabbit, etc.</sub>
            </form>
            </section>
            <Results results={results}/>
            <Photos photos={photos} />
            <div className="App-footer text-center">👩‍💻 Coded by <a href="https://eloquent-swartz-9918f7.netlify.app/" className="App-link" alt="Link to Abigail Yi's Portfolio Site">Abigail Yi</a> and is <a href="https://github.com/abigailyi/dictionary-project" className="App-link" alt="Link to Dictionary App GitHub Repository">open-sourced on GitHub</a> and is hosted on Netlify<br />
      ✏️ She also drew Owlbert our friendly, feathered helper and mascot!</div>
            </div>
        </div>
    )
    } else {
        load();
        return "Loading";
    }

}