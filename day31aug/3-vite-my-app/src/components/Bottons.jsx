

import './Botton.css';


let Button = ({type,btnText,Handler})=>{

     function app(){
        console.log('Hello');
     }
     if(type === 'success')
        return <button className="btn red-btn" onClick={Handler}>{btnText}</button>
    else if(type === 'failure')
        return <button className="btn green-btn" onClick={Handler}>Save</button>
    else 
    return <button className="btn yellow-btn" onClick={app}>OK</button>
}

// Named Export
export function DangerRedButton(){
    return <button className="btn red-btn">Delete</button>
}

export function SaveGreenButton(){
    return <button className="btn green-btn">Save</button>
}

const YellowBtn = ()=>{
     return <button className="btn yellow-btn">OK</button>
}

// export default YellowBtn;
export default Button;

