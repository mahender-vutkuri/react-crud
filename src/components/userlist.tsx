import React, { useEffect, useState } from "react";
import axios from "axios";

import UserComponent from "./user";

function UserListComponent(props: any) {
  const { userlist } = props;
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setsecondValue] = useState(2);
  const [userList, setuserList] = useState<any>([]);

  // const firstValue:any = 1;
  // const secondValue:any = 2;
  const addNumbers = () => {
    console.log(
      firstValue,
      " + ",
      secondValue,
      " is ",
      firstValue + secondValue
    );
    return firstValue + secondValue;
  };
  useEffect(() => {
    getData();
  }, []);
  const getData=()=> {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        if(response.status == 200)
        setuserList(response.data);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }
  const postCall = () => {
    const postData = {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { postData })
      .then((data: any) => console.log(data));
  };
  const putCall = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then((data: any) => console.log(data));
  };

  const deleteCall = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((data: any) => console.log(data));
  };
  const getCall = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/4")
      .then((data: any) => console.log(data));
  };
  return (
    <div>
      <input
        type="text"
        value={firstValue}
        onChange={(e) => setFirstValue(+e.target.value)}
      />
      <input
        type="text"
        value={secondValue}
        onChange={(e) => setsecondValue(+e.target.value)}
      />
      <button onClick={() => addNumbers()}>add numbers</button>
      <input type="text" />
      <ul>
        {userList.length > 0
          ? userList.map((user: any, index: number) => (
              <UserComponent key={index} user={user} />
            ))
          : "Loading ..."}
      </ul>
      <button onClick={postCall}>POST example</button>
      <button onClick={putCall}>PUT example</button>
      <button onClick={deleteCall}>DELETE example</button>
      <button onClick={getCall}>GET example</button>
    </div>
  );
}

export default UserListComponent;
