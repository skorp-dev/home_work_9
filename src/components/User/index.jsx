import React from "react";
import s from "./style.module.css";

export default function User({
  id,
  firstName,
  lastName,
  gender,
  email,
  image,
  deleteUser,
}) {
  return (
    <div className={[s.card, gender === "male" ? s.male : s.female].join(" ")}>
      <img src={image} alt={firstName} />
      <p>{firstName}</p>
      <p>{lastName}</p>
      <a href={email}>{email}</a>
      <button className={s.del_user} onClick={() => deleteUser(id)}></button>
    </div>
  );
}
