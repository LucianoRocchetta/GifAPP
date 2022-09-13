import { GifCardOptions } from "./GifCardOptions";

const GifCard = ({ title, url, username, handleAddFavorites, id }) => {

    return (
        <div className= "gif-card">
            
            <img src = {url} alt = { title }></img>
            <div className= 'gif-card-info'>
                <h2>{title}</h2>
                <h3>{(username != '') ? `Username: ${username}` : 'no username'}</h3>
                <GifCardOptions handleAddFavorites = { handleAddFavorites } id = { id } url = { url }/>
            </div>
        </div>
    )
}

export { GifCard };