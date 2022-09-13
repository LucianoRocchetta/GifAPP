import { remove, download } from '../../sources';

const showDeleteMessage = () => {
    const message = document.getElementById('delete-message');
    message.classList.add('enabled');
}

const GifFavoriteCardOptions = ({ handleRemove, id, url }) => {

    const getGifId = (id) => {
        handleRemove(id);
        showDeleteMessage();
    } 

    return (
        <div className= "gif-card-options">
            <img onClick = { () => getGifId(id) }src = { remove } alt = { remove }></img>
            <a href = { url } download><img src = { download } alt = { download }></img></a>
        </div>
    )
}

export { GifFavoriteCardOptions };