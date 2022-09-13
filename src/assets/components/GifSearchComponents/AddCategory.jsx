import { useState } from 'react';

const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputValue = ({ target:{value} }) => {
        setInputValue(value);
    }

    const handleFormSubmit = ( event ) => {
        event.preventDefault();

        inputValue != '' ? onAddCategory(inputValue) : alert('Input vacio');
        //Seteando a inicio
        setInputValue('');
    }

    return (
        <form onSubmit = { handleFormSubmit } className = "search">
            <input
                type = "text"
                placeholder= "Search gifs..."
                onChange = { handleInputValue }
                value = {inputValue}
            />
        </form>
    )
}

export { AddCategory };