function ToDo({ todo, toggleTask, removeTask }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                type="checkbox" className={todo.complete ? "item-text strike" : "item-text"} 
                onClick={() => toggleTask(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
            <i class="fa fa-trash" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default ToDo