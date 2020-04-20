import React from "react";

const FilterButton = ({text, handlerFilter, filter, currentFilter})=> {
    return(
        <button
            disabled={filter === currentFilter? 'disabled' : '' }
            onClick={()=>{handlerFilter(filter)}}
            className='todo__filter-btn'>{text}</button>
    )
}

export default FilterButton;
