import { GifFavoriteCardOptions } from './GifFavoriteCardOptions';

const GifFavoriteCard = ({ title, url, username, handleRemove, id}) => {

    return (
        <div className= "gif-card">
            
            <img src = {url} alt = { title }></img>
            <div className= 'gif-card-info'>
                <h2>{title}</h2>
                <h3>{(username != '') ? `Username: ${username}` : 'no username'}</h3>
                <GifFavoriteCardOptions id = { id } handleRemove = { handleRemove } url = { url }/>
            </div>
        </div>
    )
}

export { GifFavoriteCard };