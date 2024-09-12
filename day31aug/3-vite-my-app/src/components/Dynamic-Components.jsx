

const DynamicComponets = ()=>{
    const myName = 'Sumanta';
    const mark = [32,45,93,62,37];

    const avgMark = ()=>{
        let sum = mark.reduce((acc,curr)=>(acc+curr),0);
        return sum / mark.length;
        
    }

    return <p>Name: {myName}, Mark: {avgMark()}%</p>
}

export default DynamicComponets;