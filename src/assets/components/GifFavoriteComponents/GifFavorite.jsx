import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BoxMessage } from '../common/BoxMessage';
import { GifFavoriteCard } from './GifFavoriteCard';


const GifFavorite = () => {
    const { state } = useLocation();
    const [favorites, setFavorites ] = useState([...state]);


    const removeGifFromFavorites = (id) => {
        setFavorites(favorites.filter((gif) => gif.id != id));
    }
    
    return (
        <>
        <BoxMessage type = 'delete'/>        
        
        <div className = 'gif-grid-container'>
            
            <h2 className = 'gif-favorite-title'>My favorites GIFs</h2>
            
            <div className = 'gif-grid'>
                
                {favorites.map((gif) => <GifFavoriteCard key = { gif.id } {...gif}  handleRemove = { removeGifFromFavorites }/>)}
            </div>
        </div>   
        {
            (favorites.length == 0) ? <h2 className = 'search-message'>No favorites yet...</h2> : null
        }
        </>     
    )
}

export { GifFavorite };