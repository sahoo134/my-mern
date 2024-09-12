export default function ListItem({Todoid,itemName,AddTime}){

      const handler = ()=>{
        console.log(`${itemName} And ${Todoid}`);
       let lists =  document.getElementById(`${Todoid}`);
       lists.style.textDecoration = 'line-through';
       lists.style.opacity = 0.4;
       console.log(lists);
      //  lists.style.opacity = '0';
      }
      return <div className="row row-item" id={Todoid}>
      <div className="col-6">
         <h3>{itemName}</h3>
      </div>
      <div className="col-4">
        <h3>{AddTime}</h3>
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success" onClick={handler}>Delete</button>
      </div>
    </div>
}