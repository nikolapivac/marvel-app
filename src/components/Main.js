import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Characters from "./Characters";
import axios from "axios";

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [pageCount, setPageCount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1); 
    const [offset, setOffset] = useState(0);

    const calculateNumberOfPages = (total) => {
        let number;
        if(total % 20 === 0){
            number = total/20;
        } else number = Math.floor(total/20 + 1);

        return number;
    }

    useEffect(() => {
        setOffset(currentPage * 20 - 20);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [currentPage])

    useEffect(() => {
        let hash = "307f4ab0ddb1ea1f9fecb73a9730f62f";
        let url;
        if (searchTerm === "") {
            url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2faf4527739953ce9cf1c86ab168cfe0&hash=${hash}`;
        }
        else url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2faf4527739953ce9cf1c86ab168cfe0&hash=${hash}&nameStartsWith=${searchTerm}&offset=${offset}`;

        const fetch = async() => {
            const res = await axios(url);
            setCharacters(res.data.data.results);
            setPageCount(calculateNumberOfPages(res.data.data.total));
        }
        fetch();
    }, [searchTerm, offset])

    return (
        <div className="main">
            <div className="search_area">
                <h1 className="search_area_title">Find your favorite Marvel characters!</h1>
                <input type="text" placeholder="Search..." onChange={e => setSearchTerm(e.target.value)} value={searchTerm}/>
                {searchTerm ? 
                    <h4 className="search_area_info">Bookmark your favorite characters</h4>
                 : <h4 className="search_area_info">Bookmarked characters will appear here</h4>}
            </div>

            <Characters characters={characters} searchTerm={searchTerm}/>
            {searchTerm ? 
                <ReactPaginate 
                    pageCount={pageCount}
                    pageRangeDisplayed={20}
                    marginPagesDisplayed={2}
                    onPageChange={data => setCurrentPage(data.selected + 1)}
                    containerClassName={"container"}
                    previousLinkClassName={"page"}
                    breakClassName={"page"}
                    nextLinkClassName={'page'}
                    pageClassName={'page'}
                    disabledClassNae={'disabled'}
                    activeClassName={'active'}
                /> : <></>
            }    
        </div>
    )
}

export default Main;