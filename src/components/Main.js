import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import axios from "axios";

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        let hash = "307f4ab0ddb1ea1f9fecb73a9730f62f";
        let url;
        if (searchTerm === "") {
            url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2faf4527739953ce9cf1c86ab168cfe0&hash=${hash}`;
        }
        else url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2faf4527739953ce9cf1c86ab168cfe0&hash=${hash}&nameStartsWith=${searchTerm}`;

        const fetch = async() => {
            const res = await axios(url)
            setCharacters(res.data.data.results);
        }
        fetch();
    }, [searchTerm])

    return (
        <div className="main">
            <div className="search_area">
                <h1 className="search_area_title">Find your favorite Marvel characters!</h1>
                <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} value={searchTerm}/>
            </div>
            <Characters characters={characters}/>
        </div>
    )
}

export default Main;