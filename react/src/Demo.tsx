import React, { useEffect } from 'react';

function Demo(){
    const name = "shivani"
    const [count, setCount] = React.useState(0);
    console.log("demo rendered");
    useEffect(()=>{
        console.log("use effect called");
        return()=>{
            console.log("unmounting logic");
        }
    },[count]);//dependencied : value changes of  which will triger the effect on unmount and have dependency 0
    // this is the logic for mounting
    //dependency can be state or props or any value which is used in the effect and we want to trigger the effect when that value changes
    return(
        <>
          <h1>Demo Components</h1>
          <p>this is a demo component {name}</p>
          <h1>{name.toUpperCase()}</h1>
          <h2>{9+8}</h2>
          <button onClick={() => setCount(count + 1)}>Count: {count}</button>

        </>
    )

}
export default Demo;






// import React from 'react'

// const demo = () => {
//   return (
//     <div>demo</div>
//   )
// }

// export default demo