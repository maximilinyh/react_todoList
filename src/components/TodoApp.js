import React, {Component}from "react";
import TodoItem from "./TodoItem";
import AddItemForm from "./AddItemForm";
import FilterButton from "./FilterButton";
import uuid from 'react-uuid'
import { connect } from 'react-redux'
import {changeValueForm, addItems, updateItems, removeAllItems, setFilter} from "../Redux/actions";


function handlerFilterTodos(todos, filterValue) {
    switch (filterValue) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((todo)=> {
                return todo.completed;
            })
        case "SHOW_ACTIVE":
            return todos.filter((todo)=> {
                return !todo.completed
            })
        default:
            return todos
    }
}

class TodoApp extends Component {
    constructor() {
        super();
        this.handlerAddTodoItem=this.handlerAddTodoItem.bind(this);
        this.handlerChangeTextInput=this.handlerChangeTextInput.bind(this);
        this.handlerToggleCompletedItem=this.handlerToggleCompletedItem.bind(this);
        this.handlerDeleteTodoItem=this.handlerDeleteTodoItem.bind(this);
        this.handlerRemoveAllItems=this.handlerRemoveAllItems.bind(this);
        this.handlerFilterItems = this.handlerFilterItems.bind(this);
    }


    //change input state
    handlerChangeTextInput(event) {
        let targetValue = event.target.value;
        const {dispatch} = this.props;
         dispatch(changeValueForm(targetValue))
    }

    //add new todo item
    handlerAddTodoItem(event) {
        event.preventDefault();
        const {dispatch, inputValue} = this.props;
        let newItem = {
            id: uuid(),
            text: inputValue,
            completed: false
        }
        dispatch(addItems(newItem))
        dispatch(changeValueForm(''))
    }

    //change completed state
    handlerToggleCompletedItem(id) {
        const {items, dispatch} = this.props;
        const toggleItems = items.map((item)=> {
            if(item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        dispatch(updateItems(toggleItems))
    }

    //delete todo item
    handlerDeleteTodoItem(id) {
        const {items, dispatch} = this.props;
        const removeItems = items.filter((item)=>{
            return item.id !==id
        }).map((item)=> {
            return item;
        })
        dispatch(updateItems(removeItems))
        if(!removeItems.length) {
            dispatch(setFilter('SHOW_ALL'))
        }
    }

    //remove all items
    handlerRemoveAllItems() {
        const {dispatch} = this.props;
        dispatch(removeAllItems())
        dispatch(setFilter('SHOW_ALL'))
    }

    //filter completed items
    handlerFilterItems(filter) {
        const{dispatch} = this.props;
        dispatch(setFilter(filter))
    }

//render component
    render() {
        const {inputValue, items, filter}= this.props;

        const filterTodoList = handlerFilterTodos(items, filter)
        const todoList = filterTodoList.map((item)=> {
            return <TodoItem
                todo={item}
                key={item.id}
                handlerToggle={this.handlerToggleCompletedItem}
                handlerDelete={this.handlerDeleteTodoItem}
            />
        })

    return(
            <div className="todo">
                <div className='todo__form'>
                    <AddItemForm
                        value={inputValue}
                        handlerEventChangeText={this.handlerChangeTextInput}
                        handlerEventAdd={this.handlerAddTodoItem}
                        disabled={inputValue ==='' ? 'disabled': ''}
                    />
                </div>
                {items.length ? <small className='todo__count'>All tasks: <b>{items.length}</b></small>: null}

                <ul className="todo__list">
                    {todoList}
                </ul>
                {items.length ?
                    <div className="todo__toolbar">
                        <FilterButton
                            handlerFilter={this.handlerFilterItems}
                            currentFilter={filter}
                            filter='SHOW_ALL'
                            text='All tasks'/>
                        <FilterButton
                            handlerFilter={this.handlerFilterItems}
                            currentFilter={filter} filter='SHOW_COMPLETED'
                            text='Completed tasks'/>
                        <FilterButton
                            handlerFilter={this.handlerFilterItems}
                            currentFilter={filter}
                            filter='SHOW_ACTIVE'
                            text='Active tasks'/>
                        <button
                            onClick={this.handlerRemoveAllItems}
                            className='todo__filter-btn todo__filter-btn--remove '>Remove all tasks</button>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {inputValue, items, filterItems} = state;
    return {
        inputValue: inputValue.inputValue,
        items: items.items,
        filter: filterItems.filter
    }
}

export default connect(mapStateToProps) (TodoApp);
