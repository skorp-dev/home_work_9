import React, { useEffect, useState } from "react";
import User from "../User";
import s from "./style.module.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/users?limit=15");
      const data = await resp.json();

      setUsers(
        data.users.map(({ id, firstName, lastName, gender, email, image }) => ({
          id,
          firstName,
          lastName,
          email,
          gender,
          image,
        }))
      );
    })();
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((product) => product.id !== id));
  };

  return (
    <div className={s.container}>
      {users.map((user) => (
        <User key={user.id} {...user} deleteUser={deleteUser} />
      ))}
    </div>
  );
}
