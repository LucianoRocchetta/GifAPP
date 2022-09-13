import { useEffect, useState } from 'react';
import { getGifs } from '../../../helpers/getGifs';
import { GifCard } from './GifCard';

const GifGrid = ({category, handleAddFavorites, favorites}) => {
    const [gifs, setGifs] = useState([]);

    const filterFavoritesGif = (newFavorite) => {
        const currentGif = gifs.find(gif => gif.id == newFavorite);
        if (!favorites.includes(currentGif)) {
            handleAddFavorites(currentGif);
        } 
    }
    
    useEffect( () => { 
        getGifs(category).then((gif) => setGifs(gif)); 
    }, []);

    return (
        <div className= 'gif-grid-container'>
            <h3 className= 'category-title'>{ category }</h3>

            <div className= 'gif-grid'>
                {
                    gifs.map( gif  => <GifCard { ...gif } key = { gif.id } handleAddFavorites = { filterFavoritesGif }/>)
                }
            </div>
        </div>
    );
}

export { GifGrid };