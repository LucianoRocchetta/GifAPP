import { download, favorite } from '../../sources';

const showFavoriteMessage = () => {
    const message = document.getElementById('favorite-message');
    message.classList.add('enabled');
}   

const GifCardOptions = ({ handleAddFavorites, id, url }) => {
    
    const findGif = (event) => {
        event.preventDefault();
        handleAddFavorites(event.target.id); 
        showFavoriteMessage();  
    }

    return (
        <div className= "gif-card-options">
            <img onClick = { findGif } src = { favorite } alt = { favorite } id = { id }></img>
            <a href= { url } download><img src = { download } alt = { download }></img></a>
        </div>
    )
}

export { GifCardOptions };