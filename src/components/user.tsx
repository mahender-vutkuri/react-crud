import React from "react";

function UserComponent(props: any) {
  const TestComponent = () => {
    return <div>this is from test function</div>;
  };
function callMe(a:any){
  console.log(a);
  
}
  const element = (
    <div>
      <p>Hello, {props.user.name}</p>
      <TestComponent />
    </div>
  );
  return <li onClick={()=>callMe(props.user.name)} > {element} </li>;
}

export default UserComponent;
