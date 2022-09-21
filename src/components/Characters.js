import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "./context/appContext";

const Characters = ({characters, searchTerm}) => {

    const { bookmarked, addToBookmarked, removeFromBookmarked } = useAppContext();

    const isBookmarked = (id) => {
        const boolean = bookmarked.some((character) => character.id === id);
        return boolean;
    }

    const displayData = () => {
        if(searchTerm === ""){
            return (
                bookmarked.map(character => {
                    return(
                        <div key={character.id} className="card">
                            <img src={character.thumbnail.path + "/portrait_incredible." + character.thumbnail.extension} alt=""/>
                            <div className="card_info">
                                <h1>{character.name}</h1>
                                {
                                    isBookmarked(character.id) ? 
                                    <button onClick={() => removeFromBookmarked(character.id)}><FontAwesomeIcon className="book-gold" icon={faBookmark} /></button>
                                    : <button onClick={() => addToBookmarked(character)}><FontAwesomeIcon className="book-grey" icon={faBookmark} /></button>
                                }
                            </div>
                        </div>
                    )
                })
            )
        }
        else {
            return (
                characters.map(character => {
                    return(
                        <div key={character.id} className="card">
                            <img src={character.thumbnail.path + "/portrait_incredible." + character.thumbnail.extension} alt=""/>
                            <div className="card_info">
                                <h1>{character.name}</h1>
                                {
                                    isBookmarked(character.id) ? 
                                    <button onClick={() => removeFromBookmarked(character.id)}><FontAwesomeIcon className="book-gold" icon={faBookmark} /></button>
                                    : <button onClick={() => addToBookmarked(character)}><FontAwesomeIcon className="book-grey" icon={faBookmark} /></button>
                                }
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <div className="character-grid">
            {displayData()}
        </div>
    )
}

export default Characters;