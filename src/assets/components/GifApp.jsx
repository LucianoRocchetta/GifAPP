import { Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import { GifSearch } from "./GifSearchComponents/GifSearch";
import { SideMenu } from "./GifMenuComponents/SideMenu";
import { GifFavorite } from "./GifFavoriteComponents/GifFavorite";

const GifApp = () => {
    const [favorites, setFavorites] = useState([]);

    return (
        <>
            <SideMenu gifs = { favorites }/>

            <div className= 'canva'>    
                <Routes>
                    <Route path = "/search" element = {<GifSearch favorites = { favorites } getFavoritesGifsFromChild = { setFavorites }/>}></Route>
                    <Route path = "/favorite" element = {<GifFavorite  />}></Route>
                </Routes>
            </div>
        </>
    )
}

export { GifApp };