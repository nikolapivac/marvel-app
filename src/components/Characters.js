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

    // if user is interacting with the search bar, display the characters;
    // if search bar is empty, display bookmarked characters
    return (
        <div className="character-grid">
            {searchTerm ? 
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
            }) :
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
            }
        </div>
    )
}

export default Characters;