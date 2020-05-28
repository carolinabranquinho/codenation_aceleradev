import React from 'react';

const SortButton = ({label, text, onFilter, filter}) => {

    function handleClick() {
        onFilter(filter === label ? '' : label);
    }

    return (
        <button 
            onClick={handleClick}
            className={`filters__item ${filter === label ? 'is-selected' : ''}`} 
        >
        {text} 
        <i className="fas fa-sort-down" />
        </button>
    )

}

export default SortButton;