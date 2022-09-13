import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
import { BoxMessage } from '../common/BoxMessage.jsx';

const GifSearch = ({getFavoritesGifsFromChild, favorites}) => {
    const [categories, setCategories] = useState([]);
    
    const handleAddFavorites = (newFavorite) => {
        getFavoritesGifsFromChild([newFavorite, ...favorites]);
    }

    const handleAddCategory = ( newCategory ) => {
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
        }
    };

    return (
        <>
            <div className= 'search-bar'>
                <h1>GifApp</h1>
                <BoxMessage type = 'add'/>
                <AddCategory onAddCategory = { handleAddCategory }/>
            </div>

            { 
                (categories.length == 0) ? <h2 className = 'search-message'>No searches yet...</h2> : null
            }
           
            {categories.map( (category) => <GifGrid key = { category } category = {category} favorites = { favorites } handleAddFavorites = { handleAddFavorites }/>)}
        </>  
    );
};

export { GifSearch };