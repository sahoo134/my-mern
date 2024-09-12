import './messageTodo.css'

export function TodoItem({item_name,time}){
    return(
        <>
        <br />
           <h4 className="item-todo-row">{item_name}</h4>
           <h5 className="item-todo-row">{time}</h5>
           <button type="button" class="btn btn-danger" >Delete</button>
        </>
    )
}