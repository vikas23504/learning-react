import React from "react";
const Child = React.memo(() => {
  console.log("Child Render");
  return <h1>Child</h1>;
});

export default Child;

/*react memo child component ko re-render nhi hine deta jb tak vo update nhi hota agr hum react.memo 
use nhi krege to parent componetne child components ko bhi re-render krega
*/
