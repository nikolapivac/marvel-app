import React from "react";
import Card from "./Card";

const Characters = ({characters}) => {
    return (
        <div className="character-grid">
            {
                characters.map(character => {
                    return (
                        <Card key={character.id} character={character}></Card>
                    )
                })
            }
        </div>
    )
}

export default Characters;