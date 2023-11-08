import React from "react";
import UserCard from "./UserCard";
import "./global.css";
import Data from "./user.json";
import { UserCardClass } from "./UserCardClass";
function UserData() {
  return (
    <div className="cards">

      {Data.map((data) => (

        <UserCard
          name={data.name}
          age={data.age}
          phone={data.phoneNumber}
          address={data.address}
        />
      ))}
      {/* <UserCardClass
        name={Data.name}
        age={Data.age}
        phone={Data.phoneNumber}
        address={Data.address}
      /> */}
    </div>
  );
}

export default UserData;
