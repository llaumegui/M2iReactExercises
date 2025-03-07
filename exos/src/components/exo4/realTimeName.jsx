import { useState } from "react";

const RealTimeName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const changeFirstName = (e) => setFirstName(e.target.value);
  const changeLastName = (e) => setLastName(e.target.value.toUpperCase());

  return (
    <>
      <input
        className="firstName"
        type="text"
        placeholder="Prénom"
        value={firstName}
        onInput={changeFirstName}
      />
      <input
        className="lastName"
        type="text"
        placeholder="Nom"
        value={lastName}
        onInput={changeLastName}
      />

      <pre>
        Bonjour{" "}
        <b>
          {firstName} {lastName}
        </b>
        ! Bienvenue sur l'application!
      </pre>
    </>
  );
};
export default RealTimeName;
