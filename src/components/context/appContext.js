import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);
export const useAppContext = () => {
    const context = useContext(AppContext);

    if(context === undefined){
        throw new Error("App Context must be within AppContextProvider");
    }

    return context;
}

const AppContextProvider = ({children}) => {
    const [bookmarked, setBookmarked] = useState([]);

    //Store bookmarked characters in local storage
    useEffect(() => {
        const getBookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        if (getBookmarks) setBookmarked(getBookmarks);
    }, [])

    useEffect(() => {
        if(bookmarked?.length){
            localStorage.setItem("bookmarks", JSON.stringify(bookmarked));
        } else{ 
            localStorage.clear();
        }
    }, [bookmarked])


    const addToBookmarked = (character) => {
        const oldBookmarked = [...bookmarked];
        const newBookmarked = oldBookmarked.concat(character);

        setBookmarked(newBookmarked);
    }

    const removeFromBookmarked = (id) => {
        const oldBookmarked = [...bookmarked];
        const newBookmarked = oldBookmarked.filter((character) => character.id !== id);

        setBookmarked(newBookmarked);
    }

    return(
        <AppContext.Provider value={{bookmarked, addToBookmarked, removeFromBookmarked}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;