import React from "react";
import TodoItem from './todoItem';

function TodoList (props){
    const {items, clearList, handleDelete, handleEdit, handleChecked} = props
    return (
        <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">todo list</h3>

            {items.map(item =>{
                    return(             
                        <TodoItem 
                            key = {item.id} 
                            title ={item.title} 
                            handleDelete = {() => handleDelete(item.id)} 
                            handleEdit = {() => handleEdit(item.id)}
                            checked = {item.checked}
                            handleChecked={() => handleChecked(item.id)}
                        />
                    )
            })}
            <button className="btn btn-danger btn-block text-capitalize mt-5" onClick = {clearList} >  
                clear list
            </button>
        </ul>
    )
}


export default TodoList;