const hiddenMessage = ( e ) => {
    e.target.parentElement.classList.remove('enabled');
}

const BoxMessage = ({ type }) => {
        { if ( type == 'add') {
            return (
                <div className = 'favorite-message' id = 'favorite-message'>
                    <h2>Gif added successfully!</h2>
                    <button onClick = { hiddenMessage } className = 'message-btn'>Ok</button> 
                </div>
            )
        } else if ( type == 'delete' ) {
            return ( 
                <div className = 'delete-message' id = 'delete-message'>
                    <h2>Gif removed successfully!</h2> 
                    <button onClick = { hiddenMessage } className = 'message-btn'>Ok</button> 
                </div>
            )
        }
    } 
}

export { BoxMessage };