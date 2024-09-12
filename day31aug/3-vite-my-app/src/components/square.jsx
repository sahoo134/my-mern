

const Square = (props)=>{
   if(props.nums == undefined){
    console.log('not prints');
    return <p>No Numbers</p>;
   }
    return <ul>
        {
            props.nums.map((num,index)=>{
                return <li key={num}> Square of {num} is {num*num} </li>
            })
        }
    </ul>

}


export default Square;