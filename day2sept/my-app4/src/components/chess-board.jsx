

import './chess-board.css'
let Body = ()=>{
    let Arr = ['A','B','C','D','E','F','G','H'];
    let str = [1,2,3,4,5,6,7,8];
    // function call_me(item,i){
    //    document.querySelector('.result').innerHTML = `${item} ${i}`
    // }
    return(
        <>
        <div className='result'></div>
        <div className="main-body">
             { 
                
                Arr.map((item,index)=>{
                   return <div className='row'>{
                     str.map((i)=>{
                        return <div className='column'>{item}{i}</div>
                     })
                    }</div>
                })
             }
        </div>
        </>
    )
}

export default Body;