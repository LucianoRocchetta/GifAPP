import { favorite, search } from '../../sources';
import { Link } from 'react-router-dom';

const SideMenu = ({ gifs }) => {
    console.log(gifs);
    return (
        <div className= 'side-menu'>
            <nav>
                <Link to ='/search'><img src = { search } alt = { search }></img></Link>
                <Link to = '/favorite' state = { gifs }><img src = { favorite } alt = { favorite }></img></Link>
            </nav>
        </div>
    )
}

export { SideMenu };