import React, {useState} from 'react';

const Cntr = function () {
    function Inc() {
        setCount(count+1);
        console.log(count);
    }
    function Dec2(){
        setCount(count-1);
        console.log(count);
    }
    const[count,setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Inc}>Increment</button>
            <button onClick={Dec2}>decrement</button>
        </div>
    )
}
export default Cntr;