import React from "react";
import Child from "./child";
import luffy from '../assets/luffy.webp'
// import { useState } from "react";
function parent() {
  // const [name, setName] = useState("Charan");
  // console.log(name);
  // function handleClick(param) {
  //   setName(param);
  // }
  // console.log(name);

  function fun(name){
    console.log("hai "+name)
  }

  const stu_det = [
    { n: "prabha", p: "actor", lm: "kalki" },
    { n: "Rana", p: "actor", lm: "beemlanayak" },
    { n: "NTR", p: "actor", lm: "RRR" },
    { n: "Surya", p: "actor", lm: "Vikram" },
    { n: "karthi", p: "actor", lm: "Japan"}
  ];
  return (
    <>    <div className="cards">
      {/* {name} */}
      <Child
        luffy={luffy}
        si="1"
        name="Sricharan"
        roll={4223}
        clg="ACOE"
        sd={stu_det[0]}
        func={fun}
      />
      <Child
        luffy={luffy}
        si="2"
        name="charan"
        roll={4250}
        clg="ACOE"
        sd={stu_det[1]}
        // fun={fun(stu_det[1].n)}
        func={fun}
      />
      <Child
        luffy={luffy}
        si="3"
        name="praveen"
        roll={4220}
        clg="ACOE"
        sd={stu_det[2]}
        // fun={fun(stu_det[2].n)}
        func={fun}
      />
      <Child
        luffy={luffy}
        si="4"
        name="Karthik"
        roll={4254}
        clg="ACOE"
        sd={stu_det[3]}
        // fun={fun(stu_det[3].n)}
        func={fun}
      />
      <Child
        luffy={luffy}
        si="5"
        name="manohar"
        roll={4245}
        clg="ACOE"
        sd={stu_det[4]}
        // fun={fun(stu_det[3].n)}
        func={fun}
      />
    </div>

    </>

  );
}

export default parent;
