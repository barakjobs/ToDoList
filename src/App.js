import React, {Component} from 'react';
import TodoInput from './Component/todoInput';
import TodoList from './Component/todoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false,
    checked: false
  }

  handleChange = e => {
      this.setState({
      item: e.target.value
    });
  }

  handleChecked = (id) => {
    const filterItem = this.state.items.filter( item => 
      item.id !== id);
    const selectedItem = this.state.items.find( item => item.id === id);
    const position = this.state.items.indexOf(selectedItem)
    
    const newItem= {
      id: id,
      title: selectedItem.title,
      checked: !selectedItem.checked
    }
    // const updateItems = this.state.items;
    filterItem.splice(position, 0, newItem);
    this.setState({
      items: filterItem
    });
  }


  haldleSubmit = e => {
    e.preventDefault();
    if (this.state.item.trim() !== ''){
          const newItem= {
          id:this.state.id,
          title:this.state.item,
          checked: false
        }
        const updateItems = [...this.state.items, newItem];
        this.setState({
          items:updateItems,
          item:"",
          id:uuid(),
          editItem:false
        });
    }
  }

  clearList = () => {
    return(
      this.setState({
        items: []
      })
    )
  }

  handleDelete =(id) => {
      const filterItem = this.state.items.filter( item => 
        item.id !== id);
      this.setState({
        items:filterItem
      });
  }

  handleEdit = (id) => {
    const filterItem = this.state.items.filter( item => 
      item.id !== id);

     const selectedItem = this.state.items.find( item => item.id === id) 
      this.setState({
        items:filterItem,
        item: selectedItem.title,
        editItem: true,
        id:id
      });
  }

 render(){ 
   return (
    <div className = "container">
      <div className = "row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center"> 
            todo input
          </h3>
          <TodoInput
            item = {this.state.item} 
            haldleSubmit = {this.haldleSubmit} 
            handleChange = {this.handleChange}
            editItem = {this.state.editItem}
           />
          <TodoList 
            items={this.state.items} 
            clearList={this.clearList} 
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit} 
            handleChecked={this.handleChecked}
          />
        </div>
      </div>
    </div>
  );
 }
}

export default App;
