import React from "react";
import Child from "./child";
import luffy from '../assets/luffy.webp'
function parent() {
  const stu_det = {n:"prabha", p:"actor", lm:"kalki"};
  return (
    <div>
      <Child luffy={luffy} si="1" name="Sricharan" roll={4223} clg="ACOE" sd={stu_det}/>
      <Child luffy={luffy} si="2" name="charan" roll={4250} clg="ACOE" sd={stu_det}/>
      <Child luffy={luffy} si="3" name="praveen" roll={4220} clg="ACOE" sd={stu_det}/>
    </div>
  );
}

export default parent;
