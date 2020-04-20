import React from "react";

const AddItemForm = ({value, handlerEventAdd, handlerEventChangeText, disabled})=> {
    return(
        <form onSubmit={handlerEventAdd}>
            <input value={value} onChange={handlerEventChangeText} type="text" placeholder='What you need to todo?'/>
            <button type='submit' disabled={disabled}>Add</button>
        </form>
    );
}

export default AddItemForm;
