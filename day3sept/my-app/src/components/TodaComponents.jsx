import Add from "./AddButton";
import { DateTodo } from "./Date";
import Text from "./Text";
import './TodaComponents.css';
function TodoComponents(){
   return(
    <>
       <Text className='to-do'/>
       <DateTodo className="to-do"/>
       <Add className='to-do' text='Add'/>
      
    </>
   )
}
export default TodoComponents;