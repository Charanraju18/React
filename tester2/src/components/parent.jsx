import React from "react";
import Child from "./child";
function parent() {
  return (
    <div>
      <Child si="1" name="Sricharan" roll={4223} clg="ACOE" />
      <Child si="2" name="charan" roll={4250} clg="ACOE" />
      <Child si="3" name="praveen" roll={4220} clg="ACOE" />
    </div>
  );
}

export default parent;
