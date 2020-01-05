import React from "react";

function TodoItem  (props) {
    const {title, handleDelete, handleEdit, handleChecked, checked} = props;
    return (
        <li className ="list-group-item text-capitalize d-flex 
        justify-content-between my-2">
            <span className="mx-2" onClick = {handleChecked}>
                <i className={checked ? "fas fa-check-circle": "far fa-circle"} ></i>
            </span>
            {/* <span className="mx-2 text-success" >
                <i className="fas fa-check-circle"></i>
            </span> */}
           <h6>{title}</h6>
            <div className="todo-icon">
                <span className="mx-2 text-success" onClick = {handleEdit}>
                    <i className="fas fa-pen"></i>
                </span>
                <span className="mx-2 text-danger" onClick = {handleDelete}>
                    <i className="fas fa-trash"></i>
                </span>
            </div>
        </li>
    )
}


export default TodoItem;