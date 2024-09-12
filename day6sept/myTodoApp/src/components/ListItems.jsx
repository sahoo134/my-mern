import ListItem from "../AddItem-List";

 function ListItems(){
    const TodoList = [{id:1,itemName:'BuyMilk',AddTime:'5/10/1027'},
        {id:2,itemName:'Go to College',AddTime:'Every Day'}
      ]
    return TodoList.map(item=><ListItem key={item.id} itemName={item.itemName} AddTime={item.AddTime} Todoid={item.id}/>)
}

export default ListItems;