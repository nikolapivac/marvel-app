import React from "react";

const Card = ({character}) => {
    return (
        <div className="card">
            <img src={character.thumbnail.path + "/portrait_xlarge." + character.thumbnail.extension} alt=""/>
            <h1>{character.name}</h1>
        </div>
    )
}

export default Card;